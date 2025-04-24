# --- Build stage ---
FROM maven:3.9.4-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# --- Run stage ---
FROM openjdk:17-jdk-alpine
WORKDIR /app
EXPOSE 8080
COPY --from=build /app/target/check-backend-0.0.1-SNAPSHOT.jar /app/check-backend.jar
CMD ["java", "-jar", "/app/check-backend.jar"]
