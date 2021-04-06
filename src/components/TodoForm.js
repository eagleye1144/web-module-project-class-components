import React from 'react';

class TodoForm extends React.Component {

    render() {

        return(
            <form>

                <input type = 'text' name = 'task'/>
                <button> Add To-do item</button>

            </form>


        )

    }

}