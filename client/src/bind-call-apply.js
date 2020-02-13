function bind(context, callback) {
    const obj = {
        ...context,
        callback: callback,
    };
    return () => obj.callback();
}

function foo() {
    console.log(this);
}

const originalBindedFoo = foo.bind({sound: 'meeow'});
const myBindedFoo = bind({sound: 'wooof'}, foo);

// originalBindedFoo();
myBindedFoo();
