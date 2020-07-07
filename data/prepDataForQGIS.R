# This script prepares the data for use in Mapbox.
# It separates the source data provided from HFPC into
# 8 csv files by race and mortgage type (purchase or refinance).

library(tidyverse)

year <- 2019  # change year as needed to reflect most recent data

purchase_raw <- read_csv(str_glue("source/us-purchase{year}.csv"))
refi_raw <- read_csv(str_glue("source/us-refi{year}.csv"))

purchase_dat <- purchase_raw %>%
  select(-tract, -total, -loantype) %>%
  group_split(raceethnicity)

write_csv(purchase_dat[[1]], str_glue("us-purchase{year}-aa.csv"))
write_csv(purchase_dat[[2]], str_glue("us-purchase{year}-asian.csv"))
write_csv(purchase_dat[[3]], str_glue("us-purchase{year}-his.csv"))
write_csv(purchase_dat[[4]], str_glue("us-purchase{year}-nhw.csv"))

refi_dat <- refi_raw %>%
  select(-tract, -total, -loantype) %>%
  group_split(raceethnicity)

write_csv(refi_dat[[1]], str_glue("us-refi{year}-aa.csv"))
write_csv(refi_dat[[2]], str_glue("us-refi{year}-asian.csv"))
write_csv(refi_dat[[3]], str_glue("us-refi{year}-his.csv"))
write_csv(refi_dat[[4]], str_glue("us-refi{year}-nhw.csv"))
