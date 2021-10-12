---
sidebar_position: 1
sidebar_label: Free Cloud PostgreSQL Now
---
# Get Free Cloud PostgreSQL Now
In this section you will find out how to create a serverless PostgreSQL cluster in the cloud in less than 10 seconds.

You have an application that requires a Postgres database and you want to get a connection string to free instance of Postgres in the cloud? You know enough about PostgreSQL? Then this section is for you.If not, head out to [introduction](/)

You can create serverless Postgres in the cloud in this three easy steps


## 1. Sign up to [console](http://console.zenith.com)
You will need to provide your github credentials and log in to the console. In the future you will also be able to sign up with Google, Microsoft, Apple, or Okta

## 2. Go to the clusters page and click "Create New Cluster"
You can change the cluster name or leave it as is. Zenith chooses human readable names by default.

## 3. Click "Create" and Zenith will create and start a Postgres cluster
The cluster will start automatically in a quick second and you can connect to the cluster from you command line using the command:


`psql -h lb.zenith.tech -U <user_name> <cluster_name>`

If you set up `.pgpass` by clicking "Generate Token" and pasting a command into your terminal you won't need to specify your password
