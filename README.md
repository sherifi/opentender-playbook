# Opentender Portal Ansible Playbook

Configure a dedicated Opentender Server or Virtual Machine

## DO NOT RUN ON A SERVER WITH EXISTING OTHER SERVICES/APPS

Needed:
* Ubuntu Server (ubuntu-server-16.04.1) in a Virtual Machine (2GB RAM, min. 30GB HD)
* Ansible 2.2.1.0
* Gmail SMTP user for outgoing mail sending (no incoming mail is configured)

## Preparation

### install ubuntu

you must use `app` as your main user name, password as you choose

### add files to ansible "files" folder

add ssh keys

`files/id_rsa_opentender`
`files/id_rsa_opentender.pub`

### create file "hosts" in "1_access"

```
[opentender]
YOUR_IP ansible_port=YOUR_PORT
```

### create file "hosts" in "2_setup"

```
[opentender]
YOUR_IP ansible_port=YOUR_PORT ansible_ssh_private_key_file=../files/id_rsa_opentender
```

replace YOUR_IP with your server ip 

replace YOUR_PORT with your server ssh port (beware, if it's virtual machine, it's most likely NOT on port 22) 

### copy "2_setup/group_vars/all.yml.dist" to "2_setup/group_vars/all.yml" and fill in your settings into all UPPERCASED VARIABLES

```
mail:
  user: "YOUR_GMAIL_EMAIL_ADDRESS"
  pass: "YOUR_GMAIL_EMAIL_PASSWORD"
  hostname: "YOUR_DOMAIN" 
```

## RUN

First, on a fresh Ubuntu Installation, it will copy the public ssh key and enable root ssh access.

execute "run.sh" in "1_access" & enter the server user password

Second, connection will be made with this key and the password login will be disabled.

Then Node, Elasticsearch & Utilities will be downloaded and installed with specialized settings.

execute "run.sh" in "2_setup"

Restart the VM and Opentender will be available on port 3000 of your Virtual Machine/Server.
