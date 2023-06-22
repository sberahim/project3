Impact of Covid across Countries
Coronavirus Country Profiles
In a fast-evolving pandemic it is not a simple matter to identify the countries that are most successful in making progress against it. For this assessment, we track the impact of the pandemic across our publication and we built country profiles for 207 countries to study in depth the statistics on the coronavirus pandemic for every country in the world.

Every profile includes four sections:

Cases: How many new cases are being confirmed each day? How many cases have been confirmed since the pandemic started? How is the number of cases changing?
Deaths: How many deaths from COVID-19 have been reported? Is the number of deaths rising or falling? How does the death rate compare to other countries?
Vaccinations: How many vaccine doses are being administered each day? How many doses have been administered in total? What share of the population has been vaccinated?
Testing: How much testing for coronavirus do countries conduct? How many tests did a country do to find one COVID-19 case?

Why this dashboard?
A one-stop, interactive dashboard provides a powerful and efficient solution for users to access, analyze, and manage data in a centralized and user-friendly manner, enabling them to derive valuable insights and make informed decisions.

This dashboard is fully customisable.

Who is this dashboard for?
Travel Insurance Providers: The dashboard can serve as a centralized platform for travel insurance providers to provide interactive insights in cases/deaths/vaccination, in return, can able to provide risk-based insurance premium cost for travellers in high risks countries, i.e. low vaccination rate countries.

Travel Tour Operators: For travel tour operators, the dashboard can offer insights and tools to manage and track their tour offerings, providing better operation and cost-return based on the country’s risk covid profile.

References and Datasets
Dataset from ourworldindata.org/coronavirus.

Full Citation to Edouard Mathieu, Hannah Ritchie, Lucas Rodés-Guirao, Cameron Appel, Charlie Giattino, Joe Hasell, Bobbie Macdonald, Saloni Dattani, Diana Beltekian, Esteban Ortiz-Ospina and Max Roser (2020) - "Coronavirus Pandemic (COVID-19)". Published online at OurWorldInData.org. Retrieved from: 'https://ourworldindata.org/coronavirus' [Online Resource].

Steps:
1. git clone everything to local drive
2. change the password in config.py
3. install postgreSQL, if not yet done
4. Running the covid_app.py using command: python covid_app.py

Config.py file requirments
Use the following guidelines:
- db_user = "postgres" #check and change to your PostgreSQL user name, if different
- db_password = #change to your PostgreSQL password
- db_host = "localhost" #check and change to your PostgreSQL host name, if different
- db_port = 5432 #check and change to your PostgreSQL port number, if different
- db_name = "covid_df" #create this database in PostgreSQL before running the covid_app.py script
