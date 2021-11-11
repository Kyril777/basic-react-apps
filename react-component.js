/* Anatomy of a React Component */ 
	Class Post extends React.Component {
	    state = {
	        title: 'First Post',
	        body: 'This is my first post.'
	    }

	    render() {
	        return {
	            <div>
	                <h3>{ this.state.title }</h3>
	                <p>{ this.state.body }</p>
	            </div>
	        }
	    }
	}
  
 /* 
React functional components as well. 
In this code, there is a class called ‘Post’, so it’s a ‘Post’ component. 
It extends the component class in the React library. 
And we have our render() method (which is the only required lifeylle method). 
This method takes care of rendering the component on the page and returning JSX. 
JavaScript expressions are embedded directly in the markup. 
Component states are created by creating a state object with different key pairs. 
Any JavaScript expressions can be included inside of the curly braces.
*/
