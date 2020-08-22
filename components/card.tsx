import { Component } from 'react';
import styles from './card.module.css'

export class Card extends Component <any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            number: this.props.number
        }
    }

    setNumber(number: number) {
        this.setState(() => ({
            number: number
        }));
    }

    render() {
        return (
            <div onClick={this.props.onClick} className={styles.card}>
                {this.state.number}
            </div>
        );
      }
}