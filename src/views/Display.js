import React, { Component } from 'react';
import rock from '../images/rock.png';
import paper from '../images/paper.png';
import siscors from '../images/siscors.png';


class Display extends Component {

  render() {
    const userChoice = this.props.userChoice;
    const computerChoice = this.props.computerChoice;

    const userImage = <img className='img-player user' src={userChoice === 0 ? rock : userChoice === 1 ? paper : userChoice === 2 ? siscors : undefined} alt='Objet joué'/>;

    const computerImage = <img className='computer img-computer' src={computerChoice === 0 ? rock : computerChoice === 1 ? paper : computerChoice === 2 ? siscors : undefined} alt='Objet joué'/>;

    return (
        <div className='some-page-wrapper'>
            <div className='row'>
                <div className='column'>
                    <div className='left-column'>
                        <h1 id='user' className='user'>YOU</h1>
                        <h2 className='user'>{this.props.userResult}</h2>
                            {userChoice !== -1 &&
                            userImage
                            } 
                    </div>
                </div>
                <div className='column'>
                    <div className='right-column'>
                        <h1 id='computer' className='computer'>COMPUTER</h1>
                        <h2 className='computer'>{this.props.computerResult}</h2>
                            {computerChoice !== -1 &&
                            computerImage
                            }
                    </div>
                </div>
            </div>
        </div>
    );
  }

}

export default Display;