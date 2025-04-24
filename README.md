## Satu's Weather App for Outdoor Activities
- Want to find out easily if weather conditions favor your favourite outdoor activities?
- With this application, you can define the suitable weather conditions for each of your favourite outdoor activities and get weather forecasts for them.

![forecast2](https://github.com/user-attachments/assets/81e8988d-f053-4614-ba4e-c8809def8ca3)

![forecast4](https://github.com/user-attachments/assets/0afd4b7e-e24e-4a76-abf6-7729d31b56ec)

## Info
- This is a solo project I developed during the time I was unemployed during year 2024. I was thinking of a unique idea for a web development project, because I wanted to get hired as one. (This is what I came up with and I also got hired, so maybe I did something right?)
- What I learned was to integrate Open Meteo's Free Weather API (https://open-meteo.com) to a backend built with Python and Flask, and to analyze the wather data with Pandas. With frontend I decided to focus on on developing the business logic around UI components from a React component library (MUI, https://mui.com/).

## Ideas for further development
**Frontend**
- Switch to TypeScript
- If weather conditions for an activity are not met, show a tooltip to describe which wather conditions weren't met
- For each forecast day, render a button that will open a detailed weather report for the day

**Backend**
- Figure out a dynamic approach to get the weather parameters (temperature, rain, windspeed...) from Open Meteo's API

## Prerequisites
- npm, Node.js and Python3 installed
- Instructions to get started with frontend: https://github.com/satukon/SatusWeatherApp/blob/main/frontend/README.md
- Instructions to get started with backend: https://github.com/satukon/SatusWeatherApp/blob/main/backend/README.md
