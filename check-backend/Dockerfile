FROM openjdk:17-jdk-alpine
WORKDIR /app
EXPOSE 8080
COPY target/check-backend-0.0.1-SNAPSHOT.jar /app/check-backend.jar
CMD ["java", "-jar", "/app/check-backend.jar"]
