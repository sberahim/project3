--drop table cleaned_covid

CREATE TABLE cleaned_covid (
  iso_code VARCHAR(50) NOT NULL,
  continent VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  date VARCHAR(20) NOT NULL,
  total_cases VARCHAR(50) NOT NULL DEFAULT '',
  total_deaths VARCHAR(20) NOT NULL DEFAULT '',
  total_vaccinations VARCHAR(20) NOT NULL DEFAULT '',
  total_vaccinations_per_hundred VARCHAR(20) NOT NULL DEFAULT '',
  total_tests VARCHAR(20) NOT NULL DEFAULT '',
  total_tests_per_thousand VARCHAR(20) NOT NULL DEFAULT '',
  population BIGINT NOT NULL DEFAULT 0,
  population_density DECIMAL(10, 3) NOT NULL DEFAULT 0.0,
  latitude DECIMAL(10, 4) NOT NULL DEFAULT 0.0,
  longitude DECIMAL(10, 4) NOT NULL DEFAULT 0.0
);
commit 

SELECT * FROM
cleaned_covid;


