# React Native Projects

Using expo and react native to build out sample projects.

## TODO

animations for a component
swipe right or swipe left.
we will rotate card as well. Appears to move and rotate as well.

## Animations with React native

Layout animation vs Animated System

Layout animation

- change size of box or circle, good solution. Easy to setup.

- lacks fine-grained control :(

- want ball to move vertically or in 1 dimension, layout animation.

## Animated

If you want a thing to respond to user input. Much more complicated but far more power with it. Reach for animated.

## Ball movement

down from top to bottom, smooth motion
3 questions for animation

1. Where is item right now? Exact x,y
2. where is element moving to
3. which elemnt are we moving?

How is animation changing? spring, decay, timing
components, view text image

## Authentication Flows

Email / Password
Oauth -- use existing app to login
2FA usually layered ontop of Oauth or email / password
OTP - One time password

## One Time password

user enters phone number, you text code
4 or 6 digit number
user will take that code and enter into the app

send user 4-5 digit
so little memory on users part

## Details of one time passwords

user enters phone number
we send text to user
user enters token in our app
we verify token is correct
if token is correct, user is considered authenticated

## We text user token

We text them and maybe 5 minute delay
We need to store token where you texted user
if token is correct, how can we make follow up requests?

## DONT DO THIS

user requests OTP
send device token in HTTP response. Mobile device has token.

compare code on users device
text user the code

DOn't do this, because it's easy and trivial for program to grab password.

## Correct Flow for OTP

User requests OTP
aknowledge request

- generate code save it on backend (Firebase)
- text user a code (Twilio, send user a code)

user sends us correct code

- compare codes on server
- send user a jwt to idenitfy them (for future follow up requests) (Firebase)

## Solution for code generation?

Use some cloud functions to compare and generate codes

## Server vs Serverless Computing

- Server is dedicated machinery
- servless, runs only for microseconds to seconds.
- Google cloud runs that function then throws it away
- code is organized into functions.
- functions do one thing requests directed externally to a specific function.

## User flow for authenticating their app

1. User enters email and phone
2. verify phone is not in use
3. create a new user record in Firebase
4. Respond to a request, stating user was created
5. user requests to login with phone number
6. generate a code
7. save code to the user's record
8. text the code to the user
9. user enters code
10. compare codes
11. mark code as no longer being valid // code is thrown away, good security hygine.
12. return a jwt to user

1-4 first cloud function
5-8 second cloud function
9-12 is final cloud function

## Who we characterize which functions are?

clear inputs and clear expected outputs
