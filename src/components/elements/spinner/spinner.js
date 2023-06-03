import React from 'react';
import { connect } from 'react-redux';
import './spinner.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    zindex: 1000,
    p: 4,
};

class Spinner extends React.Component {

    state = { prevProgress: 0 };

    componentDidMount() {
        setInterval(() => {

            this.setState({ prevProgress: this.state.prevProgress >= 100 ? 10 : this.state.prevProgress + 10 })

        }, 800);
    }



    render() {

        return (

            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open={this.props.open}
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                sx={{
                    display: 'flex',
                    p: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}

            >
                <Box
                    sx={{
                        position: 'relative',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        backgroundColor: '#041643',
                        boxShadow: (theme) => theme.shadows[5],
                        p: 4,
                    }}
                >
                    <Typography id="server-modal-title" variant="h6" component="h2">
                        Estamos creando tu historia de usuario
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                            <LinearProgress variant="determinate" value={this.state.prevProgress} />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                            <Typography variant="body2" color="text.secondary">{`${Math.round(
                                this.state.prevProgress,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Modal>


        )
    }

}


export default connect()(Spinner);
