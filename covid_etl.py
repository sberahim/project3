import os
import csv
import pandas as pd
from sqlalchemy import create_engine
from config import db_user, db_password, db_host, db_port, db_name

data_path = os.path.join("output","cleaned_covid.csv")

def transform():
    cleanedfile_df = pd.read_csv(data_path)
    cleanedfile_df.date = pd.to_datetime(cleanedfile_df.date)
    
    columns = cleanedfile_df.columns.to_list()
    transform_df = cleanedfile_df[columns].fillna(0)
    filtered_df = transform_df.loc[(transform_df["date"] >= "2020-03-01") & (transform_df["date"] <= "2023-02-28")]
    monthly_df = pd.DataFrame(filtered_df.groupby(["iso_code","continent","location"]).resample("M", on="date").mean())
    covid_df = monthly_df.reset_index()

    return covid_df

def load(dataframe, table):
    engine = create_engine(f"postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}")
    connection = engine.connect()
    dataframe.to_sql(table, connection, if_exists = "replace")