# Customer Registration for "HappyCustomers"

## Group Members

- Christopher Pallo
- Brayan Davila

## Table of Contents

1. [Problem Statement](#problem-statement)
   - [Proposed Solution](#proposed-solution)
   - [Backend](#backend)
   - [Frontend](#frontend)
2. [Installation](#installation)
   - [Requirements](#requirements)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
3. [Program Execution](#program-execution)
   - [Run the Application](#run-the-application)
4. [DockerHub](#dockerhub)
   - [DockerHub Repository](#dockerhub-repository)
5. [AWS ECR, EC2](#aws-ecr-ec2)
   - [Evidences](#evidences)

## Problem Statement
"HappyCustomers is a company that needs an efficient system to manage its customer information. Currently, information is handled manually in spreadsheets, which can lead to data loss, duplication of information and difficulties in accessing data quickly. The goal is to develop an automated system that will enable managers:

1.  Add new customers.
2.	Update customer information.
3.	Consult the list of clients.

### Proposed Solution

Implement an application based on microservices, divided into two main parts:

### 1. Backend

- **Customer Service:** Responsible for managing the creation, update and consultation of clients.

### 2. Frontend

- **Web Application:** User interface for administrators to interact with the customer service, registering new customers and updating their information.

## Installation

### Requirements

- npm (Node Package Manager)

### Clone the Repository

```sh
git clone https://github.com/ChristopherPalloArias/Frontend-ClientMicroservices.git
```

### Install Dependencies
```sh
npm install
```
## Program Execution
### Run the Application
```sh
npm run dev
```

## DockerHub
### DockerHub Repository

https://hub.docker.com/r/christopherpallo2000/cp-clientefeliz-frontend

Docker Pull Command
```sh
docker pull christopherpallo2000/cp-clientefeliz-frontend
```

## AWS ECR, EC2
### Evidences
**Summary of the Instance**
![image](https://github.com/BrayanBJ27/Frontend-ClientMicroservices/assets/87538474/81b51247-5a43-48ea-82ec-c146a0c8d090)

**Verify that images are running on AWS**

![image](https://github.com/BrayanBJ27/Frontend-ClientMicroservices/assets/87538474/5ffc773a-52b9-4c7f-8eb8-438d23b31a4a)

**Frontend running on the instance IP**

![image](https://github.com/BrayanBJ27/Frontend-ClientMicroservices/assets/87538474/f38259a4-f985-477f-87fb-7b1b82c393a4)

**Microservice Create running on the instance IP**

![image](https://github.com/BrayanBJ27/Frontend-ClientMicroservices/assets/87538474/57359426-7932-4db1-a6d8-dc12a524958c)

**Microservice List running on the instance IP**

![image](https://github.com/BrayanBJ27/Frontend-ClientMicroservices/assets/87538474/a58329df-bc09-45d3-9aa7-a4d33a13271f)

**Microservice Update running on the instance IP**

![image](https://github.com/BrayanBJ27/Frontend-ClientMicroservices/assets/87538474/7e635db6-f553-44ef-8265-e597df6b3d7c)
