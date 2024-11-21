import { connect } from "react-redux";
import style from "./information.module.css";
import { Component } from "react";

class InformationLayoutConteiner extends Component {
    constructor(props) {
        super();
    }
    render() {
        let massage;
        if (this.props.isDraw) {
            massage = "Ничья";
        } else if (this.props.isGameEnded) {
            massage = `Победа: ${this.props.currentPlayer}`;
        } else {
            massage = `Ходит: ${this.props.currentPlayer}`;
        }
        return (
            <>
                <div className={style.info}>{massage}</div>
            </>
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
