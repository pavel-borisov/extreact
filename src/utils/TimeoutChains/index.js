/**
 * Created by PBorisov on 24.04.2018.
 */

export default class TimeoutChains {
    chain = [];
    then (fn, d) {
        this.chain.push([fn, d]);
        return this;
    }
    start (index=0) {
        const [ fn, d=0 ] = this.chain[index];
        !!fn && window.setTimeout( () => {
            fn();
            !!this.chain[index+1] && this.start(index+1);
        }, d );
        return this;
    }
}
