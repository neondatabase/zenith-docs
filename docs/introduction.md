---
sidebar_position: 0
sidebar_label: Introduction
slug: /
---

# Introduction
Serverless Cloud-Native Postgres



## What is Zenith?


Zenith is a serverless implementation of PostgreSQL. It’s an auto-scaling, on-demand database as a service for modern applications, making it a credible open-source alternative to Amazon Aurora.

Unlike typical Postgres in the cloud services, Zenith is serverless. This difference allows for several advantages: Zenith reduces the complexity involved in provisioning and managing database capacity, and scales up to support large databases or scales down when the database is not needed. Additionally, it allows efficient management of database resources.


## What Does Zenith Do?


Zenith’s main innovation is the separation of storage and compute. By dividing these processes, database software can increase availability and scale. This can also substantially reduce costs.

The separation of storage and compute processes means creating database systems so that all persistent data is stored on a remote, network-attached source. In this type of database architecture, local storage holds transient data. When necessary, users can rebuild local storage from the persistent storage data.

## Zenith’s main features are:

*Serverless PostgreSQL*: Users can get a connection string to Postgres at the touch of a button within a console or with an API call. Being serverless is vital to integrating Postgres with the rest of the serverless stack and support Serverless Functions. 

Users can use Serverless Functions to handle various tasks, like form submission, user authentication, database queries, and more. Additionally, being serverless allows users to query Postgres directly from a JavaScript application.

*Data Branching*: Postgres is an excellent open-source relational database management system. However, it’s a “client-server” database. As a result, it needs operational setup and maintenance to keep a database cluster and each instance available around the clock.

Zenith allows users to branch the entire Postgres cluster, making it ideal for developer, staging, and production environments.

*Unlimited Storage*: Zenith is an on-demand database as a service. As a result, users have access to unlimited storage that allows them to scale capacity as needed. Instead of paying for the database instance even if it’s inactive, users pay on a per-second basis for the resources that they use.

## Benefits of Zenitih

A Zenith database data cluster is formed of two layers: the storage layer and the compute layer.

The storage layer replicates data across multiple availability zones. The compute layer scales vertically and adapts automatically to the current workload. The scalable compute layer is a solution for applications with unpredictable workloads or situations where there are no database queries for a considerable amount of time.

This process has vast implications for the pay-per-use pricing model as it allows users to reduce costs significantly. Zenith is a straightforward and cost-efficient option for applications with infrequent and intermittent use.

## Simplicity

Classic PostgreSQL implementations require data capacity to be managed and provisioned. Zenith allows users to save time and resources because it auto-scales to match their applications requirements. Additionally, because it’s on-demand, it can automatically start up and shut down as needed.
Cost-Effective

Zenith offers users more control over database resource spending. Users only pay for the database instance when it is running. Many low-volume applications are used for only a few minutes numerous times per day or week. Zenith facilitates a more cost-effective approach where the database is only active when in use.
Easily Scalable

Zenith databases are easily scalable for both compute and storage. Applications are auto-scaled. Zenith scales up to support extensive databases and scales down to zero if there are no workloads against the database.

## High Availability & Disaster Recovery

High availability is essential for production applications. Zenith allows high availability for business-critical workloads due to its robust serverless build.

## What Do I use Zenith for?


Zenith supports a wide range of database workloads, such as websites and development and test environments. Furthermore, it supports both applications with periodic, sparse, or unpredictable workloads, and the most demanding, business-critical applications requiring high availability and high capacity scaling.

## Irregular Workloads

Several applications like payroll, operational reporting, or budgeting software are used infrequent times during a day or year. Lightly-used applications present a problem for database management because they require throughput at irregular peaks. 

Provisioning for these intermittent capacity needs means businesses are faced with a choice: either pay for resources they don’t typically use or average database capacity. Paying for resources that are not used frequently is uneconomical. While averaging capacity can result in significant performance issues and a poor user experience during times the application is active.

Zenith’s auto-scaling database solves this issue.

## Capacity planning

Many databases face extreme workloads at unpredictable times. Capacity planning is possible when database managers can plan ahead, but unexpected spikes are more challenging to account for. Zenith’s serverless model provides enough elasticity to scale up during an application’s peak load and then scale down when the spike is over.

## Database Fleet Maintenance

Modern enterprises often have software stacks of hundreds of applications. Managing resources across each database is a challenging task. As requirements for each application vary, every database needs to be monitored and adjusted for capacity to achieve availability and performance within a budget.
Zenith adjusts database capacity on-demand, eliminating the need to manage hundreds or more databases within an enterprise’s fleet.

## SaaS Applications

SaaS vendors can run thousands of databases, with each providing support for different customers. Frequently, these databases are run in single clusters to optimize use and cost-efficiency. However, the management of these databases needs to take place individually. For example, some cloud computing infrastructure co-tenants can use a disproportionate amount of bandwidth, CPU, and disk I/O, negatively affecting the other co-located databases.

Zenith solves this issue by allowing SaaS vendors to provision database clusters for each customer without worrying about the costs of provisioned capacity. Databases can be shut down when they are not active, while automated capacity adjustments can meet application needs.

## What is the Idea Behind Zenith?

Postgres is fast becoming the leading global relational database. Security, stability, flexibility, and a vast and ever-growing open-source community are all contributing to its rise to prominence. However, the community has overlooked cloud-native capabilities for Postgres.

The result is several different Postgres in the cloud services that offer a disparate range of capabilities, pricing structures, and SLAs.

Zenith is a canonical implementation of a cloud-native database that separates storage and compute, turning Postgres into a serverless cloud database. Zenith software is free, open-source, and distributed under the Apache license. Finally, Zenith is monetized by running Postgres as a service in the cloud of your choice. 
