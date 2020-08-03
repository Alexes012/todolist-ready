import React from 'react';
import styles from './AddNewItemForm.module.css'

class AddNewItemForm extends React.Component {

    state = {
        error: false,
        title: ""
    };

    onAddItemClick = () => {
        let newText = this.state.title;
        this.setState({title: ""});

        if (newText === "") {
            this.setState({error: true});
        } else {
            this.setState({error: false});
            // передаём новый текст наружу
            this.props.addItem(newText);
        }
    };

    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        });
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddItemClick();
        }
    };

    render = () => {
        let classNameForInput = this.state.error ? "error" : "";

        return (
            <div className={styles.wrapper}>
                <div className={styles.newTodolist}>
                    <input className={styles.classNameForInput}
                           type="text"
                           placeholder="New item name"
                           onChange={this.onTitleChanged}
                           onKeyPress={this.onKeyPress}
                           value={this.state.title}
                    />
                    <div className={styles.buttonsColl}>
                        <div className={styles.customBtn}>
                            <button className={styles.btn9} onClick={this.onAddItemClick}>Add</button>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default AddNewItemForm;

