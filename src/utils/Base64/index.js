/*
 * Created by PBorisov on 07.05.18 15:45.
 */

export function b64EncodeUnicode(obj) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(
        encodeURIComponent(JSON.stringify(obj))
            .replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(`0x${p1}`))
    );
}

export function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return JSON.parse(
        decodeURIComponent(
            atob(str.startsWith('?') ? str.slice(1) : str)
                .split('')
                .map(c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
                .join('')
        )
    );
}
