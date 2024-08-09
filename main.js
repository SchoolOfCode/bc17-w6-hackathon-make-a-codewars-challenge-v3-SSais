//Please read instructions in PROJECT_PRESENTATION.md 

export function sortParenthesis (input) {
    let openCount = 0;
    let closeCount = 0;
    let result = '';

    // First pass: count matching pairs
    for (let char of input) {
        if (char === '(') {
            openCount++;
        } else if (char === ')') {
            if (openCount > 0) {
                openCount--;
                result += '()';
            } else {
                closeCount++;
            }
        }
    }

    // Add unmatched parentheses at the end
    result += '('.repeat(openCount);
    result += ')'.repeat(closeCount);

    return result;

};

export function bonusChallange (input) {
//This function has not been tested
};
