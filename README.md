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

## Correct Flow

User requests OTP
aknowledge request

- generate code save it on backend
- text user a code

user sends us correct code

- compare codes on server
- send user a jwt to idenitfy them (for future follow up requests)
