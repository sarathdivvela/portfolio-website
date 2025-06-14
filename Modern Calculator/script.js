class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.history = document.getElementById('history');
        this.currentInput = '0';
        this.previousInput = '';
        this.operator = '';
        this.waitingForOperand = false;
        this.lastResult = null;
        this.historyArray = [];
    }

    updateDisplay() {
        this.display.textContent = this.formatNumber(this.currentInput);
        this.animateDisplay();
    }

    updateHistory() {
        if (this.previousInput && this.operator) {
            this.history.textContent = `${this.formatNumber(this.previousInput)} ${this.operator}`;
        } else {
            this.history.textContent = '';
        }
    }

    animateDisplay() {
        this.display.classList.add('animate');
        setTimeout(() => {
            this.display.classList.remove('animate');
        }, 200);
    }

    formatNumber(num) {
        if (num === '') return '0';
        
        const number = parseFloat(num);
        if (isNaN(number)) return num;
        
        // Handle very large or very small numbers
        if (Math.abs(number) >= 1e15 || (Math.abs(number) < 1e-6 && number !== 0)) {
            return number.toExponential(6);
        }
        
        // Format with appropriate decimal places
        const formatted = number.toLocaleString('en-US', {
            maximumFractionDigits: 10,
            useGrouping: true
        });
        
        return formatted;
    }

    inputNumber(num) {
        if (this.waitingForOperand) {
            this.currentInput = num;
            this.waitingForOperand = false;
        } else {
            this.currentInput = this.currentInput === '0' ? num : this.currentInput + num;
        }
        this.updateDisplay();
    }

    inputDecimal() {
        if (this.waitingForOperand) {
            this.currentInput = '0.';
            this.waitingForOperand = false;
        } else if (this.currentInput.indexOf('.') === -1) {
            this.currentInput += '.';
        }
        this.updateDisplay();
    }

    inputOperator(nextOperator) {
        const inputValue = parseFloat(this.currentInput);

        if (this.previousInput === '') {
            this.previousInput = this.currentInput;
        } else if (this.operator) {
            const currentValue = parseFloat(this.previousInput);
            const newValue = this.calculate(currentValue, inputValue, this.operator);

            if (newValue === null) return;

            this.currentInput = String(newValue);
            this.previousInput = this.currentInput;
            this.updateDisplay();
        }

        this.waitingForOperand = true;
        this.operator = nextOperator;
        this.updateHistory();
    }

    calculate(firstOperand = null, secondOperand = null, operator = null) {
        const first = firstOperand !== null ? firstOperand : parseFloat(this.previousInput);
        const second = secondOperand !== null ? secondOperand : parseFloat(this.currentInput);
        const op = operator || this.operator;

        if (isNaN(first) || isNaN(second)) {
            this.showError('Invalid input');
            return null;
        }

        let result;
        switch (op) {
            case '+':
                result = first + second;
                break;
            case '−':
            case '-':
                result = first - second;
                break;
            case '×':
            case '*':
                result = first * second;
                break;
            case '÷':
            case '/':
                if (second === 0) {
                    this.showError('Cannot divide by zero');
                    return null;
                }
                result = first / second;
                break;
            default:
                return null;
        }

        // Add to history
        const calculation = `${this.formatNumber(first)} ${op} ${this.formatNumber(second)} = ${this.formatNumber(result)}`;
        this.addToHistory(calculation);

        this.currentInput = String(result);
        this.previousInput = '';
        this.operator = '';
        this.waitingForOperand = true;
        this.lastResult = result;
        
        this.updateDisplay();
        this.updateHistory();
        
        return result;
    }

    addToHistory(calculation) {
        this.historyArray.unshift(calculation);
        if (this.historyArray.length > 10) {
            this.historyArray.pop();
        }
    }

    clearAll() {
        this.currentInput = '0';
        this.previousInput = '';
        this.operator = '';
        this.waitingForOperand = false;
        this.lastResult = null;
        this.updateDisplay();
        this.updateHistory();
    }

    clearEntry() {
        this.currentInput = '0';
        this.updateDisplay();
    }

    backspace() {
        if (this.currentInput.length > 1) {
            this.currentInput = this.currentInput.slice(0, -1);
        } else {
            this.currentInput = '0';
        }
        this.updateDisplay();
    }

    showError(message) {
        this.display.textContent = message;
        this.display.classList.add('error');
        setTimeout(() => {
            this.display.classList.remove('error');
            this.clearAll();
        }, 2000);
    }

    toggleSign() {
        if (this.currentInput !== '0') {
            if (this.currentInput.charAt(0) === '-') {
                this.currentInput = this.currentInput.slice(1);
            } else {
                this.currentInput = '-' + this.currentInput;
            }
            this.updateDisplay();
        }
    }

    percentage() {
        const value = parseFloat(this.currentInput);
        if (!isNaN(value)) {
            this.currentInput = String(value / 100);
            this.updateDisplay();
            this.waitingForOperand = true;
        }
    }
}

// Initialize calculator
const calc = new Calculator();

// Button click functions
function inputNumber(num) {
    calc.inputNumber(num);
}

function inputDecimal() {
    calc.inputDecimal();
}

function inputOperator(op) {
    calc.inputOperator(op);
}

function calculate() {
    calc.calculate();
}

function clearAll() {
    calc.clearAll();
}

function clearEntry() {
    calc.clearEntry();
}

function backspace() {
    calc.backspace();
}

function toggleSign() {
    calc.toggleSign();
}

function percentage() {
    calc.percentage();
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Numbers
    if (key >= '0' && key <= '9') {
        inputNumber(key);
        highlightButton(key);
    }
    
    // Operators
    switch(key) {
        case '+':
            inputOperator('+');
            highlightButton('+');
            break;
        case '-':
            inputOperator('−');
            highlightButton('−');
            break;
        case '*':
            inputOperator('×');
            highlightButton('×');
            break;
        case '/':
            event.preventDefault();
            inputOperator('÷');
            highlightButton('÷');
            break;
        case 'Enter':
        case '=':
            event.preventDefault();
            calculate();
            highlightButton('=');
            break;
        case '.':
            inputDecimal();
            highlightButton('.');
            break;
        case 'Backspace':
            backspace();
            highlightButton('⌫');
            break;
        case 'Escape':
        case 'Delete':
            clearAll();
            highlightButton('AC');
            break;
        case 'c':
        case 'C':
            clearEntry();
            highlightButton('C');
            break;
        case '%':
            percentage();
            highlightButton('%');
            break;
    }
});

// Button highlight effect for keyboard input
function highlightButton(text) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        if (button.textContent === text) {
            button.style.transform = 'scale(0.95)';
            button.style.background = button.classList.contains('equals-btn') 
                ? 'linear-gradient(135deg, #FF5252, #26D0CE)'
                : 'rgba(255, 255, 255, 0.3)';
            
            setTimeout(() => {
                button.style.transform = '';
                button.style.background = '';
            }, 150);
        }
    });
}

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const size = Math.max(this.offsetWidth, this.offsetHeight);
        const x = e.offsetX - size / 2;
        const y = e.offsetY - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize display
calc.updateDisplay(); 