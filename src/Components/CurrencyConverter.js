import React, { Component } from 'react'
import CurrencyDisplay from './CurrencyDisplay'

const withCurrency = (BaseComponent) =>
	class Currency extends Component {
		state = {
			currencyChosen: false,
			selectedCurrency: 'Select Currency',
			amount: 0
		}

		handleOptionSelect = (evt) => {
			const userValue = evt.target.value
			this.setState(() => {
				return {
					selectedCurrency: userValue,
					currencyChosen: userValue === 'Select Currency' ? false : true
				}
			})
		}
    
		render() {
      
			return (
				<div>
          
					{this.state.currencyChosen ? (
						<BaseComponent
							currency={currencyData[this.state.selectedCurrency]}
							amount={this.state.amount}
						/>
					) : (
						<p>Please Select Currency</p>
					)}
				</div>
			)
		}
	}

const ExchangedCurrency = withCurrency(CurrencyDisplay)

export default ExchangedCurrency