import React, {Component} from 'react';  
import './Hitung_bmi.css'

class Hitung_bmi extends Component {
    render(){
        return (
            <center>
                <div className="card">
                    <div className="card-header">
                        Body Mass Index
                    </div>

                    <div className="card-body">
                        <table>
                            <tr>
                                <td>Berat</td>
                                <td>
                                    <input className="form-control" name="berat" value={this.state.berat} onChange={ev => this.setState({berat: ev.target.value})} />
                                </td>
                            </tr>
                            <tr>
                                <td>Tinggi</td>
                                <td>
                                    <input className="form-control" name="tinggi" value={this.state.tinggi} onChange={ev => this.setState({tinggi: ev.target.value})} />
                                </td>
                            </tr>
                        </table>

                    <div className="card-footer">
                        <button href="" className="btn btn-info" onClick={this.hitung}> Hitung </button>
                        <hr />
                        <h4 className="title"> Hasil </h4>
                        <div class="alert alert-info" role="alert">
                            {this.state.hasil}
                        </div>
                    </div>
                    </div>
                </div>
            </center>
        );
    }

    constructor(){
        super();
        this.state = {
            hasil: 'Masukan Berat dan Tinggi Anda!',
            berat: 0,
            tinggi: 0
        }
    }

    berat = (event) =>{
        this.setState({berat: event.target.value})
    }
    tinggi = (event) =>{
        this.setState({tinggi: event.target.value})
    }
    hitung = () =>{
        let berat = this.state.berat;
        let tinggi = this.state.tinggi;
        let bmi = berat / ((tinggi / 100) ** 2)
        console.log(bmi)

        if (bmi < 18.5) {
            this.setState({
               hasil: 'Anda Kekurangan berat badan' 
            })
        } else if (bmi >= 18.5 && bmi < 25){
            this.setState({
                hasil: 'Anda Normal [Ideal]'
            })
        } else if (bmi >= 25 && bmi <30 ){
            this.setState({
                hasil: 'Anda Keleebihan berat badan'
            })
        } else {
            this.setState({
                hasil: 'Anda Obesitas'
            })
        }
    }

}

export default Hitung_bmi;