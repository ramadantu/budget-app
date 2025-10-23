ARG KEYCLOAK_VERSION=26.4.1

FROM quay.io/keycloak/keycloak:$KEYCLOAK_VERSION AS builder

ENV KC_DB=postgres
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true

WORKDIR /opt/keycloak
RUN /opt/keycloak/bin/kc.sh build

FROM registry.access.redhat.com/ubi9/ubi AS ubi-micro-build
RUN mkdir -p /mnt/rootfs
RUN dnf install --installroot /mnt/rootfs curl --releasever 9 --setopt install_weak_deps=false --nodocs -y; dnf --installroot /mnt/rootfs clean all

FROM quay.io/keycloak/keycloak:$KEYCLOAK_VERSION
COPY --from=builder /opt/keycloak/ /opt/keycloak/
COPY --from=ubi-micro-build /mnt/rootfs /

# https://www.keycloak.org/server/all-config
ENV KC_DB=postgres
ENV KC_DB_URL_HOST=postgres
ENV KC_DB_DATABASE=keycloak
ENV KC_DB_SCHEMA=public
ENV KC_DB_USERNAME=postgres
ENV KC_HOSTNAME_STRICT=false
ENV KC_HTTP_ENABLED=true
ENV KC_LOG=console
ENV KC_LOG_CONSOLE_COLOR=true
ENV KC_PROXY=edge
ENV KC_SPI_CONNECTIONS_JPA_LEGACY_MIGRATION_STRATEGY=update
ENV KC_BOOTSTRAP_ADMIN_USERNAME=admin

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
