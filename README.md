## Planning your weekly sport activities made easy 
- *I wonder if I could go stand-up paddling before the weekend or is it too windy and cold? Then again, is it windy enough to go sailing with Wendy on Saturday, or should I just go for a long walk then? Or is it going to rain? Then maybe we could go play Padel at the hall...*
- With this application, you can find out the answers to all of those questions on one quick glance! Just define the weather conditions you prefer for each of your favourite  activities and get a weekly weather forecast tailored for those.

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
- Dark mode

**Backend**
- Figure out a dynamic approach to get the weather parameters (temperature, rain, windspeed...) from Open Meteo's API

**Overall**
- Go beyond being a weather app and become a sports app. Make it possible to track activities and to build charts about user's monthly/yearly activity based on that data. It could also be interesting to see how weather affects user's activity: are they more active on good weather?

## Prerequisites
- npm, Node.js and Python3 installed
- Instructions to get started with frontend: https://github.com/satukon/SatusWeatherApp/blob/main/frontend/README.md
- Instructions to get started with backend: https://github.com/satukon/SatusWeatherApp/blob/main/backend/README.md
