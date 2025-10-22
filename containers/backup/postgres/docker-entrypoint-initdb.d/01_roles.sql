--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE keycloak;
ALTER ROLE keycloak WITH NOSUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:K8VtpK4PAyWfcGPAsLWwJQ==$utQSKnufiJw7PjxTA+5Wjh4jlKL9KlyBPG8ay5NILLE=:KP+icpcVTwLzfFxeBcseH0UVb3pRU+ioycmj1fBeosg=';
-- CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:QImxUReh14oH0xhJQ6HnYA==$VvxF7kn5BXcbkJq5gx23FOtwidpo05wnS3H3QQ+ekt0=:S6pjhzAUVOHdYJ2KnC5h2IgXB+pTv0MpJEpJ8BRv/ls=';
CREATE ROLE temp;
ALTER ROLE temp WITH SUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:ikX+Xv5vM+4oKh/MsLiwcw==$bEX5gi0huvfIVnyGWhpJrQs653ctCDWdU/tu2EcdcaQ=:59wg/o1f8z6DAnAi+G5rNkbV9vkWMYkuA132318v6Po=';

--
-- User Configurations
--






--
-- PostgreSQL database cluster dump complete
--

