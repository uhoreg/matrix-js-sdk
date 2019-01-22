/*
Copyright 2018 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * @module crypto/verification/Error
 *
 * Error messages.
 */

import {MatrixEvent} from "../../models/event";

export function newVerificationError(code, reason, extradata) {
    extradata = extradata || {};
    extradata.code = code;
    extradata.reason = reason;
    return new MatrixEvent({
        type: "m.key.verification.cancel",
        content: extradata,
    });
}

export function errorFactory(code, reason) {
    return function(extradata) {
        return newVerificationError(code, reason, extradata);
    };
}

export const newUserCancelledError = errorFactory("m.user", "Cancelled by user");

export const newTimeoutError = errorFactory("m.timeout", "Timed out");

export const newUnknownTransactionError = errorFactory(
    "m.unknown_transaction", "Unknown transaction",
);

export const newUnknownMethodError = errorFactory("m.unknown_method", "Unknown method");

export const newUnexpectedMessageError = errorFactory(
    "m.unexpected_message", "Unexpected message",
);

export const newKeyMismatchError = errorFactory(
    "m.key_mismatch", "Key mismatch",
);

export const newUserMismatchError = errorFactory("m.user_error", "User mismatch");

export const newInvalidMessageError = errorFactory(
    "m.invalid_message", "Invalid message",
);
