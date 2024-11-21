import { connect } from "react-redux";
import { Component } from "react";

class InformationLayoutConteiner extends Component {
    constructor(props) {
        super();
    }
    render() {
        let message;
        if (this.props.isDraw) {
            message = "Ничья";
        } else if (this.props.isGameEnded) {
            message = `Победа: ${this.props.currentPlayer}`;
        } else {
            message = `Ходит: ${this.props.currentPlayer}`;
        }
        return (
            <div className="text-center mb-4">
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-xl font-semibold text-indigo-600">
                        {message}
                    </h2>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDraw: state.isDraw,
        isGameEnded: state.isGameEnded,
        currentPlayer: state.currentPlayer,
    };
};

const InformationLayout = connect(mapStateToProps)(InformationLayoutConteiner);

export class Information extends Component {
    render() {
        return (
            <>
                <InformationLayout />
            </>
        );
    }
}
