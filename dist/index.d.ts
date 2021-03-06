import FIFO from '@fabiospampinato/fifo';
import Lockable from '@fabiospampinato/lockable';
import { guard, model, state, states, transition, transitionObj, statesObj } from './types';
declare class FSM {
    model: model;
    states: statesObj;
    queue: FIFO;
    initial: state;
    processing: Lockable;
    state: state;
    constructor(model: model, states: statesObj, initial: state);
    _isValidState(state: state): boolean;
    _isValidTransition(state: state, transition: transition): boolean;
    _isValidTransitionGuard(state: state, transition: transition): boolean;
    _getTransition(state: state, transition: transition): transitionObj | undefined;
    _getTransitionState(state: state, transition: transition): state | undefined;
    _getTransitionGuard(state: state, transition: transition): guard | undefined;
    _getExistsEnters(prevState: state, nextState: state): [states, states];
    _callModel(path: string, args?: any[]): any;
    get(): state;
    set(state: state): this;
    reset(): this;
    is(state: state): boolean;
    isDoable(transition: transition): boolean;
    do(...args: any[]): this;
    transition(transition: transition): this;
    transition(transition: transition, ...args: any[]): this;
    _transition(transition: string, ...args: any[]): void;
    _exit(state: state): void;
    _enter(state: state): void;
}
export default FSM;
