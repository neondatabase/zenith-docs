---
sidebar_position: 1
---

# Zenith Architecture

Database as a Service (DBaaS) in the cloud is growing in popularity. Since 2009, when AWS released its Relational Database Service (RDS), these "managed databases" have become standard because they enable a faster time-to-market by increasing data security, standardization, and productivity.

The cloud is here to stay and the majority of apps start in the cloud. Additionally, more established enterprises are moving their workloads and data to the cloud. There are several benefits to this approach, such as:
* Security
* Time-to-market
* A scalable "pay-as-you-go" model that reduces costs for under-utilized machines.

The above reasons present a compelling case for database as a service. However, several issues arise with this service.

Firstly, customers that move into the cloud expect the service to work as well — or better — than on-premises architecture. More specifically, the expectation is that a database as a service should be highly available, capable of supporting massive databases, and high-performing. Just like any other cloud service database as a service should drive towards zero ops.

In addition, a database should be able to scale with the workload so that customers can reduce costs by only paying for the resources they use. This allows the database to be truely zero ops database.

However, it has become apparent that these advantages cannot be satisfied with traditional database architecture. There are a few main issues here. Firstly, moving an traditional database from one machine to another can be costly to support higher/lower throughput and take advantage of computing resources in a cluster.

Secondly, supporting large transactional databases and high availability . To achieve high availability, you need a low mean-time-to-recovery. Typically, you can only achieve this with smaller databases.

On-premise databases didn't suffer from this issue because they deployed expensive hardware like storage area networks (SANs) that allowed high availability. Hardware of this kind is not available on the cloud. Whatsmore, on-premise deployments plan downtimes and software update cycles carefully, but this type of planning is generally impossible in the cloud.

Cloud Database Architecture
Over the years, several services emerged to address these distinct challenges. In particular, research focused on Online Transaction Processing (OLTP) cloud-based database systems. One solution was the separation of storage and compute.

This process involves breaking down the database management system and separating the storage and compute elements. Persistent data, like recovery and checkpointing, is stored on a remote, network-attached source. While the compute services, like transaction processing, are decoupled from this storage.

Two of the more prominent commercial examples of these database management systems are Amazon Aurora and Windows Socrates. Zenith Database has many similarities to these services but contains some advantages.

PostgreSQL has emerged as the developer’s choice of database. As enterprise workloads migrate from SQL Server and Oracle, they have a choice of PostgreSQL or MySQL. Because it is deeply trusted, Postgres has become the more popular choice. In fact, it is considered by many to be the Git of databases.

As the cloud app market grows each year exponentially, relational database APIs are becoming standardized on Postgres. For example, Aurora, CloudSQL, Citrus, and CockroachDB. Again, SQL Server and Oracle are not the first choice for relational databases — Postgres is.

Zenith Architecture
Zenith is a serverless implementation of PostgreSQL. Additionally, it's open-source, making it a reliable alternative to Aurora and Socrates.

The typical Postgres deployment in the cloud is shown below.





Per the image, Failure Domain 1 is replicated in Failure Domain 2. From here, it is transferred to redundant block storage, for example, Elastic Block Storage (EBS), and then to the Storage Replica.
As demonstrated in the sketch, the Primary Instance in Failure Domain 1 also sends binary data to be stored as a single entity in a binary large object (BLOB).

However, Zenith’s architecture is different. It uses a multi-tenant distributed storage system, as shown below.

Zenith uses an extra Failure Domain to make multiple replicas of the primary source. Because the system has a quorum of six, it uses three copies of data to overlap with a write quorum of four.
From here, it can send distributed writes to the binary large object (BLOB).
This architecture provides Zenith with extra features when compared with Aurora and Socrates are:
Zenith is ALWAYS serverless: A serverless database frees the customer from managing and provisioning the database. This process allows high availability that is charged based on usage and not storage.

Proxy in front of the compute layer:
Unlike other database architectures, Zenith uses a proxy in front of the compute. This feature allows Zenith users to have a consistent endpoint to the database: lb.zenith.tech

As a result, you can connect to the database using psql -h lb.zenith.tech -U nikita-memsql@zenith main.

Open-Source and Postgres Native:
AWS Aurora is Postgres (and MySQL) built on top of a custom proprietary cloud-native storage. In essence, Aurora is a hard fork, which makes it challenging to maintain.

Because Zenith is open-source and Postgres native, any changes are upstreamed, making it easier to manage.

Cloud Independence:
Data gravity is a big issue in cloud storage. As datasets increase, they become harder to move. As a result, processing power and applications become attracted to the mass of data, just like the theory of gravity.

However, Zenith solves this issue by allowing the user to choose the number of copies across many different clouds. This process enables cloud independence and makes it far easier to migrate data across various clouds.

Scalability:
To reduce costs and improve throughput, database management requires a level of flexibility. Zenith users can scale up to handle peak loads and then scale down to zero when the database is not being accessed.

Branching:
Zenith has the ability to branch data. This allows users to instantly create a full copy-on-write copy of the Postgres cluster and use it as a developer, staging, or test environment.

Kubernetes:
Zenith compute nodes are in Kubernetes. Also called K8s, Kubernetes is an open-source system designed to automate the scaling, management, and deployment of containerized applications.
Kubernetes logically groups the containers in an application into easily managed and discovered groups. This allows increased portability, productivity, and multi-cloud capability.















## PostgreSQL primary

## PostgreSQL replica

## WAL Safekeeper

## Pageserver

## Object Storage
