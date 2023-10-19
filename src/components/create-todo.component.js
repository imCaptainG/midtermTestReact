import { Component } from "react";

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onPhotoChange = this.onPhotoChange.bind(this);



        this.state = {
            name: '',
            description: '',
            category: '',
            quantity: '',
            price: '',
            selectedPhotoName: '',
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

        onChangeCategory(e) {
        this.setState({
            category: e.target.value
        })
            
    }
    
    onChangeQuantity(e) {
        this.setState({
            quantity: e.target.value
        })
    }
    
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const { selectedPhotoName } = this.state;
        console.log("Name: ",this.state.name)
        console.log("Description: ",this.state.description)
        console.log("Category: ",this.state.category)
        console.log("Quantity: ",this.state.quantity)
        console.log("Price: ",this.state.price)
        console.log("Photo Name: ", selectedPhotoName)
        
        this.setState({
            name: '',
            description: '',
            category: '',
            quantity: '',
            price: ''
        });

    }

    triggerFileInput() {
        document.getElementById("photo").click();
    }

    onPhotoChange(e) {
        const fileInput = e.target;
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
            const selectedFile = fileInput.files[0]
            const selectedPhotoName = selectedFile.name;

            this.setState({
                selectedPhotoName,
            })
        }
    }


    render() {
        return (
            <div className="container">
                <div className="col-lg-4"></div>
                <div className="col-lg-6">
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" class="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName} />
                        </div>
                
                        <div className="form-group">
                            <label for="exampleInputEmail1">Description</label>
                            <input type="text" class="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription} />
                        </div>
                

                        <div className="form-group">
                            <label for="exampleInputEmail1">Category</label>
                            <input type="text" class="form-control"
                                value={this.state.category}
                                onChange={this.onChangeCategory} />
                        </div>

                        <div className="form-group">
                            <label for="exampleInputEmail1">Quantity</label>
                            <input type="text" class="form-control"
                                value={this.state.quantity}
                                onChange={this.onChangeQuantity} />
                        </div>

                        <div className="form-group">
                            <label for="exampleInputEmail1">Price</label>
                            <input type="text" class="form-control"
                                value={this.state.price}
                                onChange={this.onChangePrice} />
                        </div>

                        <div className="form-group">
    <label htmlFor="photo">Upload photo:</label> <br></br>
    <input
        type="file"
        className="btn btn-primary"
        id="photo"
        accept="image/*"
        onChange={this.onPhotoChange}
    /> <br></br>
                        </div><br></br>
                        

                                    
                        <button type="submit" className="btn btn-primary" value={this.onSubmit}>Submit</button>
                        <button type="button" className="btn btn-primary">Cancle</button>
                    </form>
                </div>

                

            </div>
        )
    }
}