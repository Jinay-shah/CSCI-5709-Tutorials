# Tutorial 4

    **Author** \
    Name: Jinay Shah \
    Banner ID: B00928737 \
    Email ID: jn851778@dal.ca \
    Date Created: 17 Feb 2024 \
    Last Modification Date: 19 Feb 2024

## Links

- Tutorial 4  Application deployed on Netlify URL: [https://tutorial4-shah-jinay.netlify.app/] (https://tutorial4-shah-jinay.netlify.app/)

- Tutorial 4  Application code on GitLab URL : [https://git.cs.dal.ca/jinays/csci-5709-tutorials/-/tree/main/Tutorial4](https://git.cs.dal.ca/jinays/csci-5709-tutorials/-/tree/main/Tutorial4)

## Testing

For the testing of the assignment, I started the webapp in my local machine then when everything was working fine, I tested it on the browser while deploying it on Netlify.

## Deployment

1. First of all, I Cloned my `CSCI 5709 Tutorials` repository to my local machine.
2. Then, I created a new project with the following command in [React](https://react.dev) using `npx create-react-app tutorial4` command.
3. Afterwards, I pushed my tutorial4 project to my GitHub account repository.
4. I deployed my app on [Netlify](https://www.netlify.com).
5. I created a `README.md` file and pushed it to the gitlab repository.

## Built With

* [React](https://react.dev) - The web framework used
* [Netlify](https://app.netlify.com/) - Hosting platform used

## Sources Used

I used the below sources for implementing the code for my profile registration and profile page in Tutorial-4.


try {
        const response = await fetch('https://express-t4.onrender.com/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
  
        if (response.ok) {
          navigate('/profile-listing');
        } else {
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

```    
The code above was created by adapting the code from [stackoverflow](https://stackoverflow.com/questions/38510640/how-to-make-a-rest-post-call-from-reactjs-code) as shown below:

```
fetch('https://mywebsite.example/endpoint/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})

```
- The code was implemented by me for creating the POST request  for my tutorial4 in CSCI-5709. I was going through the internet for how to implement API in react framework . Then, I found this site where API call is implemented. So i took reference of [stackoverflow](https://stackoverflow.com/questions/38510640/how-to-make-a-rest-post-call-from-reactjs-code). 

 
- The given [stackoverflow](https://stackoverflow.com/questions/38510640/how-to-make-a-rest-post-call-from-reactjs-code).'s code was used as a reference to learn how to implement API call.


### 2. ProfileListingPage.js

*Lines 11-21*

```
try {
          const response = await fetch('https://express-t4.onrender.com/api/users');
          if (response.ok) {
            const data = await response.json();
            setUsers(data);
          } else {
            console.error('Failed to fetch users');
          }
        } catch (error) {
          console.error('Error during user fetch:', error);
        }

```

```    
The code above was created by adapting the code from [stackoverflow](https://stackoverflow.com/questions/68105012/what-is-the-correct-way-to-pass-parameters-to-a-react-query-usequery-method-that) as shown below:

```
import axios from "axios"
import { getProduct } from "../../queries/products"
import { useQuery } from "react-query"

const prodId= '1'
const { data } = useQuery(['product', prodId], getProduct)

//queries/products.js
import axios from 'axios'

export const getProduct = async (key, { prodId }) => {
    console.log(opid)
    const { data } = await axios.get(`/api/v1/products/${prodId}`)
    return data

```
- The code was implemented by me for creating the GET request  for my tutorial4 in CSCI-5709. I was going through the internet for how to implement API in react framework . Then, I found this site where API call is implemented. So i took reference of [stackoverflow](https://stackoverflow.com/questions/68105012/what-is-the-correct-way-to-pass-parameters-to-a-react-query-usequery-method-that). 

 
- The given [stackoverflow](https://stackoverflow.com/questions/68105012/what-is-the-correct-way-to-pass-parameters-to-a-react-query-usequery-method-that).'s code was used as a reference to learn how to implement API call.


*Lines 46-53*

```
<div className="user-list">
          {filteredUsers.map((user) => (
    <Link key={user._id} to={`/profile-detail/${user._id}`} className="user-card-link">
        <div className="user-card">
            <img src={user.picture} alt={`Profile of ${user.name}`} className="user-image" />
            <div className="user-details">
                <p className="user-name">{user.name}</p>
            </div>
        </div>
    </Link>
            ))}
</div>
          
```

The code above was created by adapting the code from [stackoverflow](https://stackoverflow.com/questions/71996854/how-to-display-objects-in-react) as shown below:

```
 return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

```

- The code was implemented by me for using map function  for my tutorial4 in CSCI-5709. I was going through the internet for how to implement Map function in react framework . Then, I found this site where Map function is implemented. So i took reference of [stackoverflow](https://stackoverflow.com/questions/71996854/how-to-display-objects-in-react). 

 
- The given [stackoverflow](https://stackoverflow.com/questions/71996854/how-to-display-objects-in-react)'s code was used as a reference to learn how to implement Map function.


### 3. ProfileDetailPage.js

*Lines 11-22*

```
try {
        const response = await fetch(`https://express-t4.onrender.com/api/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error during user details fetch:', error);
      }
    };
```

The code above was created by adapting the code from [stackoverflow](https://stackoverflow.com/questions/68105012/what-is-the-correct-way-to-pass-parameters-to-a-react-query-usequery-method-that) as shown below:

```
import axios from "axios"
import { getProduct } from "../../queries/products"
import { useQuery } from "react-query"

const prodId= '1'
const { data } = useQuery(['product', prodId], getProduct)

//queries/products.js
import axios from 'axios'

export const getProduct = async (key, { prodId }) => {
    console.log(opid)
    const { data } = await axios.get(`/api/v1/products/${prodId}`)
    return data

```
- The code was implemented by me for creating the GET request  for my tutorial4 in CSCI-5709. I was going through the internet for how to implement API in react framework . Then, I found this site where API call is implemented. So i took reference of [stackoverflow](https://stackoverflow.com/questions/68105012/what-is-the-correct-way-to-pass-parameters-to-a-react-query-usequery-method-that). 

 
- The given [stackoverflow](https://stackoverflow.com/questions/68105012/what-is-the-correct-way-to-pass-parameters-to-a-react-query-usequery-method-that).'s code was used as a reference to learn how to implement API call.


### References

[1]	“How to make a rest post call from ReactJS code?,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/38510640/how-to-make-a-rest-post-call-from-reactjs-code. [Accessed: 17-Feb-2024].


[2]	“How to display objects in react?,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/71996854/how-to-display-objects-in-react. [Accessed: 17-Feb-2024].

[3]	“What is the correct way to pass parameters to a React-query useQuery method that uses Axios,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/68105012/what-is-the-correct-way-to-pass-parameters-to-a-react-query-usequery-method-that. [Accessed: 17-Feb-2024].
