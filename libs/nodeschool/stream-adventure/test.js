import { fetch, TransformStream } from './mock.js'


console.log(fetch)
function getTransformStream() {
    return new TransformStream({
        count: 1,
        transform(chunk, controller) {
            console.log('[transform]', chunk);
            console.log(this.count++)
            controller.enqueue(new TextEncoder().encode(chunk));
        },
        flush(controller) {
            console.log('[flush]');
            controller.terminate();
        },
    });
}

const readableStream = new ReadableStream({
    count: 1,
    start(controller) {
        // called by constructor
        console.log('[start]', this.count);
        controller.enqueue('a');
        controller.enqueue('b');
        controller.enqueue('c');
    },
    pull(controller) {
        // called read when controller's queue is empty
        console.log('[pull]');
        controller.enqueue('d');
        controller.close(); // or controller.error();
    },
    cancel(reason) {
        // called when rs.cancel(reason)
        console.log('[cancel]', reason);
    },
});

(async () => {
    const reader = readableStream.pipeThrough(getTransformStream()).getReader();
    for (let result = await reader.read(); !result.done; result = await reader.read()) {
        console.log('[value]', result.value);
    }
})();

// const readableStream2 = new ReadableStream({
//     start(controller) {
//         // called by constructor
//         console.log('[start]');
//         controller.enqueue('a');
//         controller.enqueue('b');
//         controller.enqueue('c');
//     },
//     pull(controller) {
//         // called read when controller's queue is empty
//         console.log('[pull]');
//         controller.enqueue('d');
//         controller.close(); // or controller.error();
//     },
//     cancel(reason) {
//         // called when rs.cancel(reason)
//         console.log('[cancel]', reason);
//     },
// });

// (async () => {
//     const reader = readableStream2.pipeThrough(getTransformStream()).getReader();
//     for (let result = await reader.read(); !result.done; result = await reader.read()) {
//         console.log('[value]', result.value);
//     }
// })();