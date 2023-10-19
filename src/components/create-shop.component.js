import { Component } from "react";

export default class CreateShop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
        };
    }

    onChangeNameShop = (e) => {
        this.setState({
            name: e.target.value,
        });
    }

    onChangeDescriptionShop = (e) => {
        this.setState({
            description: e.target.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { selectedPhotoName } = this.state;
        console.log("Name: ", this.state.name);
        console.log("Description: ", this.state.description);
        console.log("Photo Name: ", selectedPhotoName);

        this.setState({
            name: '',
            description: '',
        });
    }

    triggerFileInput = () => {
        document.getElementById("photo").click();
    }

    onPhotoChange = (e) => {
        const fileInput = e.target;
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
            const selectedFile = fileInput.files[0];
            const selectedPhotoName = selectedFile.name;

            this.setState({
                selectedPhotoName,
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="col-lg-4"></div>
                <div className="col-lg-6">
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeNameShop} // Use onChangeNameShop here
                            />
                        </div>
                
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescriptionShop} // Use onChangeDescriptionShop here
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="photo">Upload photo:</label> <br />
                            <input
                                type="file"
                                className="btn btn-primary"
                                id="photo"
                                accept="image/*"
                                onChange={this.onPhotoChange}
                            /> <br />
                        </div><br />
                        

                                    
                        <button type="submit" className="btn btn-primary" value={this.onSubmit}>Submit</button>
                        <button type="button" className="btn btn-primary">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
} 
