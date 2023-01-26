///<reference path="/alt1lib.js">

"use strict";
MaterialReader.itemnumbers = new ImageSet("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAJCAYAAAB3wKHKAAABTUlEQVRIS42QUWLDMAxCe/9LZyGYCmTF3QdBPGS72+e6riWYZhesZynCLY2deRZzdaBxYpIHGzPc8uihZxfsnTUgl2ifZ00ZUUw8u87JlIu5vIOTOScTp4PTvVufnx0Z5+LKzmjaX4AXw5VLfrnvnbr8QXnmjZHDvZvOwov3u05vTx3zvCc5u81DL+dcHN53d+4/QAvKziDfhb6Dafo9Nt6f7HOubqH7M90nBudszAP1K5PBdy7mfH8UwjztKu8dxMxuZ/MZqMY627Nr4sUi9PItw5N1+RnDjzrIXcw9c57yxKYdII7VaVZ2nd/5Avc8kA/Bs5ec5aOcyTSrE9/nvYNnT/5+puvtLbk03VEs4ANiednqMkseip0eVabOb1Y3/SGSx+ltKf9RuZfzfkcxg2CEnUk9S9r13pn0313x3vXs0v5pB/K+7566YtfnD8l4/lbi9qaRAAAAAElFTkSuQmCC", [0, 7, 11, 18, 24, 29, 35, 42, 48, 55, 62, 69]);
ImageData.fromBase64(function (i) { MaterialReader.placeholderzero = i }, "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAPElEQVQYV22NUQoAMAhCq4t787XKggYTStGPJ+5eB2gYM5+wmEFZnHBK1dw6P/qXQKetDRhg/hoTQKDIBVugMuDFBvhlAAAAAElFTkSuQmCC");
MaterialReader.window = new ImageSet("data:image/png;base64,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");
var readAmount = function (buffer, ox, oy) {
    var str = "";
    var dx = 0;
    var anymatch = true;

    while (anymatch && dx < slotsize) {
        anymatch = false;
        for (var a = 0; a < BankReader.itemnumbers.buffers.length; a++) {
            var buf = BankReader.itemnumbers.buffers[a];
            var match = true;
            for (var x = 0; x < buf.width; x++) {
                if (ox + dx + x >= buffer.width && x > 2) {
                    //guess cut off chars that have at least 2 columns already
                    continue;
                }
                for (var y = 0; y < buf.height; y++) {
                    if (buf.data[4 * x + 4 * buf.width * y] != 255) { continue; }
                    var i = 4 * (ox + dx + x) + 4 * buffer.width * (oy + y);
                    if (isNumberCol(buffer.data, i)) { continue; }
                    match = false;
                    break;
                }
                if (!match) { break; }
            }
            if (!match) { continue; }
            str += "0123456789KM"[a];
            dx += buf.width;
            anymatch = true;
            break;
        }
    }
    var m;
    var amount = 0;
    if (m == str.match(/^(\d+)$/)) { amount = +m[1]; }
    if (m == str.match(/^(\d+)K$/)) { amount = m[1] * 1000; }
    if (m == str.match(/^(\d+)M$/)) { amount = m[1] * 1000 * 1000; }
    return amount;
}

function MaterialReader() {
    this.window = null;
    this.isopen = false;

    //constants
    var slotsize = 44;
    var iconsize = 36;
    var backcolor = [30, 49, 70];
    var backcolorlegacy = [62, 53, 40];

    this.find = function (img) {
        if (!img) {
            img = a1lib.bindfullrs();
        }

        a1lib.findsubimg(img, BankReader.window)
        return true;
    }
}



