# Introduction

## Serverless Cloud Native Postgres
Zenith is a Postgres database as a serivce platform for modern applications. 
Unlike a classic Postgres in the cloud Zenith is serverless. You never need to worry about sizing for either compute or storage, scaling up or down. Zenith scales up to
support very large databases and also scales down to zero if there is no workloads against the database.

The key innovation of Zenith is separation of storage and compute. It allows Zenith to deliver on a number of key features.
* Serverless Postgres. You just need to push a button in a console or make and API call and you will get a connection string to Postgres. Being serverless is incredibly important to integrate Postgres with 
the rest of the serverless stack: [AWS Lambda](https://aws.amazon.com/lambda/), [Serverless functions](https://vercel.com/docs/concepts/functions/introduction), and allow you to query Postgres directly from a JavaScript application
* Unlimited storage. Zenith never runs out of storage and only charges for what you use.
* Branching. Zenith allows to branch the entire Postgres cluster which is incredibly useful for developer, staging, and production environmetns

## What's the Idea Behind Zenith?
Postgres is on the way to becoming the number one relational database in the world. At the same time Postgres community has not been innovating on cloud native capabilites for Postgres. The result is a number of fairly different services that offer Postgres in the cloud that provide very different capabilities, pricing structures, and SLAs. Zenith is a canonical implementation of a cloud native that separates storage and compute and makes Postgresa a serverless cloud database. Zenith software is a free and open source and distributed under the Apache license. Zenith monetizes by running Postres as a service in the cloud of your choice.

## What Zenith Does
Modern applications get packaged into containers and can carry with them all the code needed for them to operate. But, more often than not, they are deployed into specific datacenters, never to be moved. This is nothing like a container in the real world. Real containers are built to be transported where there's demand for them.

With Zenith.io, we're more like those real containers, moving around the world to where the demand is.

## Location-Smart
Think of a world where your application appears in the location where it is needed. When a user connects to a Zenith application, the system determines the nearest location for the lowest latency and starts the application there.

And with automatic scaling, as more connections appear, the application is right sized for demand by creating new instances at that location.

## Agile over Time
One of the best indications of demand is time, specifically the time of day - demand increases during the day when people work, and diminishes overnight.

With Zenith, our default is to use that information and let your applications follow the sun, relocating to where the clock shows the day beginning and being ready for the day's demand. If your users behave differently, you can change this behavior and set your own schedules.

## Clever with the Cloud
Zenith isn't just the simplest way to create and scale instances in datacenters around the globe. It's also the smartest way to do it. When your users connect to a Zenith application, we analyze other nearby locations.

If it's quicker to route their request transparently to a nearby instance that's already running, we do just that. Data travels between Zenith datacenter locations over an encrypted backhaul running on fast connections.

## How Zenith Works For…
### For Developers
You can run most applications with a Dockerfile using the flyctl command. The first time you deploy an app, we assign it a global IP address. By default, apps listen for HTTP and HTTPS connections, though they can be configured to accept any kind of TCP traffic.

When users connect to your global IPs, we dynamically assign compute resources in datacenters closest to them. More users might create demand for more resources in multiple locations worldwide, while low-traffic applications may only require a small amount of resources in a single location.

### For Operations
Zenith makes application deployment simple. Global availability and global IP addresses put your applications anywhere with a single command. Automatically generated TLS certficates help secure your applications.

And once your application is deployed, Zenith keeps your performance up by sending users on the shortest, fastest path to where your application is running.

## Why Zenith?
Compare those Zenith features with a traditional non-Zenith global cloud. There you create instances of your application at every location where you want low latency.

Then, as demand grows, you'll end up scaling-up each location because scaling down is tricky and would involve a lot of automation. The likelihood is that you'll end up paying 24/7 for that scaled-up cloud version. Repeat that at every location and it’s a lot to pay for.

## Why are we Making Zenith?
Postgres is on the way to becoming the number one relational database in the world. At the same time Postgres community has not been innovating on cloud native capabilites for Postgres. The result is a number of fairly different services that offer Postgres in the cloud that provide very different capabilities, pricing structures, and SLAs. Zenith is a canonical implementation of a cloud native that separates storage and compute and runs Postgres in a serverless way. Zenith software is a free and open source and distributed under the Apache license. Zenith monetizes by running Postres as a service in the cloud of your choice.

Despite the benefits of location-smart, time-agile and cloud-clever applications, there’s been no good platform for building applications that work like this. This is what Zenith has set out to fix. In the process we want to make application distribution platforms as ubiquitous as CDNs.
