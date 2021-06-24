import s from './ProfileInfo.module.css';
import React from "react";
import {setStatus} from "../../../redux/profile-reducer";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: !this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState ({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

        console.log('componentDidUpdate')
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode
                        ? <span onDoubleClick={this.activateEditMode}>{this.props.status || '====='}</span>
                        : <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}
                        />
                    }
                </div>

            </div>
        )
    }
}

export default ProfileStatus;