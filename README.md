# Zeeguros: 

Description 


## Deployed Application
The deployed application will be found at the following link: [Insert](https://github.com/crisramoslazaro/). The application has been developed aesthetically as mobile-fist.


## Api endpoints

### Operation Routes

BaseURL /api/ONONONO

| HTTP Method |   URI Path   |          Description          |
| :---------: | :----------: | :---------------------------: |
|     GET     | /getAllONONO |      All exercises onono      |
|    POST     |  /saveONONO  |       Create new onono        |
|     GET     |     /:id     | Matching ID onononon details  |
|     PUT     |  /:id/edit   | Matching ID onononon editing  |
|   DELETE    | /:id/delete  | Matching ID onononon deletion |

### Auth Routes

BaseURL /api/auth

| HTTP Method | URI Path |    Description    |
| :---------: | :------: | :---------------: |
|    POST     | /signup  |   Sign up user    |
|    POST     |  /login  |    Login User     |
|     GET     | /verify  | Verify auth token |


## Client Routes

|     URL path      |     Description      | Protected |
| :---------------: | :------------------: | :-------: |
|         /         |      Home page       |     ❌     |
|      /login       |      Login page      |     ❌     |
|      /signup      |     Signup page      |     ❌     |
|      /about       |       About us       |     ❌     |
|     /profile      |     Profile Page     |     ✅     |
|   /profile/edit   |  Edit Profile Page   |     ✅     |
|  /profile/delete  | Delete Profile Page  |     ✅     |
| /onononon/create  |  Create a onononon   |     ✅     |
|   /onononon/:id   |  Tick off onononon   |     ✅     |
| /onononon/history | See onononon history |     ✅     |
