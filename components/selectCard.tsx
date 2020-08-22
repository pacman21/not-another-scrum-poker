import { Component } from 'react';
import { Card } from './card';
import styles from './selectCard.module.css'
import React from 'react';
import { cachedDataVersionTag } from 'v8';

class SelectCard extends Component <any, any> {
    public selectedCardElement: any;

    constructor(props: any) {
        super(props);
        this.state = { selectedCard: '', name: '' };
        this.handleClick = this.handleClick.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.selectedCardElement = React.createRef();
    }

    handleClick(number: any) {
        this.selectedCardElement.current.setNumber(number);

        this.setState(() => ({
            selectedCard: number
        }));
    }

    nameChange(event: any) {
        var name = event.target?.value;

        this.setState(() => ({
            name: name
        }));
    }

    render() {
        return (
            <div>
                <div className={styles.nameHolder}>
                    Name:  <input onChange={e => this.nameChange(e)} type='text'></input>
                </div>
                <div className={styles.cardHolder}>
                    <Card onClick={() => this.handleClick(1)} number='1'></Card>
                    <Card onClick={() => this.handleClick(2)} number='2'></Card>
                    <Card onClick={() => this.handleClick(3)} number='3'></Card>
                    <Card onClick={() => this.handleClick(5)} number='5'></Card>
                    <Card onClick={() => this.handleClick(8)} number='8'></Card>
                    <Card onClick={() => this.handleClick(13)} number='13'></Card>
                    <Card onClick={() => this.handleClick(20)} number='20'></Card>
                    <Card onClick={() => this.handleClick(40)} number='40'></Card>
                </div>
                <div style={{ display: this.state.selectedCard ? '' : 'none' }}>
                    <h2 className={styles.h3}>Selected Card</h2>
                    <div className={styles.selectedCardHolder}>
                        <Card ref={this.selectedCardElement}></Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectCard;