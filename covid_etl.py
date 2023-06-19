import os
import csv
import pandas as pd
from sqlalchemy import create_engine

data_path = os.path.join("output","cleaned_covid.csv")

def transform():
    cleanedfile_df = pd.read_csv(data_path)
    cleanedfile_df.date = pd.to_datetime(cleanedfile_df.date)

    transform_df = cleanedfile_df[[
        "iso_code",
        "continent",
        "location",
        "date",
        "total_cases",
        "total_deaths",
        "total_vaccinations",
        "total_vaccinations_per_hundred",
        "total_tests",
        "total_tests_per_thousand",
        "population",
        "population_density",
        "Latitude",
        "Longitude"
    ]].fillna(0)

    filtered_df = transform_df.loc[(transform_df["date"] >= "2020-03-01") & (transform_df["date"] <= "2023-02-28")]

    monthly_df = pd.DataFrame(filtered_df.groupby(["iso_code","continent","location"]).resample("M", on="date").mean())

    covid_df = monthly_df.drop(["Latitude","Longitude"], axis = 1).reset_index()

    return covid_df

def load(dataframe, table):
    engine = create_engine(f"postgresql://postgres:9291@localhost:5432/covid_df")
    connection = engine.connect()
    dataframe.to_sql(table, connection, if_exists = "replace")