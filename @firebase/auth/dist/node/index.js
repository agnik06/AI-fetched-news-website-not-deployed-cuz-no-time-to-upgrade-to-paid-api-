'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var totp = require('./totp-06fa6909.js');
require('@firebase/app');
require('@firebase/util');
require('tslib');
require('@firebase/component');
require('@firebase/logger');



exports.ActionCodeOperation = totp.ActionCodeOperation;
exports.ActionCodeURL = totp.ActionCodeURL;
exports.AuthCredential = totp.AuthCredential;
exports.AuthErrorCodes = totp.AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY;
exports.EmailAuthCredential = totp.EmailAuthCredential;
exports.EmailAuthProvider = totp.EmailAuthProvider;
exports.FacebookAuthProvider = totp.FacebookAuthProvider;
exports.FactorId = totp.FactorId;
exports.GithubAuthProvider = totp.GithubAuthProvider;
exports.GoogleAuthProvider = totp.GoogleAuthProvider;
exports.OAuthCredential = totp.OAuthCredential;
exports.OAuthProvider = totp.OAuthProvider;
exports.OperationType = totp.OperationType;
exports.PhoneAuthCredential = totp.PhoneAuthCredential;
exports.PhoneAuthProvider = totp.PhoneAuthProvider;
exports.PhoneMultiFactorGenerator = totp.PhoneMultiFactorGenerator;
exports.ProviderId = totp.ProviderId;
exports.RecaptchaVerifier = totp.RecaptchaVerifier;
exports.SAMLAuthProvider = totp.SAMLAuthProvider;
exports.SignInMethod = totp.SignInMethod;
exports.TotpMultiFactorGenerator = totp.TotpMultiFactorGenerator;
exports.TotpSecret = totp.TotpSecret;
exports.TwitterAuthProvider = totp.TwitterAuthProvider;
exports.applyActionCode = totp.applyActionCode;
exports.beforeAuthStateChanged = totp.beforeAuthStateChanged;
exports.browserLocalPersistence = totp.browserLocalPersistence;
exports.browserPopupRedirectResolver = totp.browserPopupRedirectResolver;
exports.browserSessionPersistence = totp.browserSessionPersistence;
exports.checkActionCode = totp.checkActionCode;
exports.confirmPasswordReset = totp.confirmPasswordReset;
exports.connectAuthEmulator = totp.connectAuthEmulator;
exports.createUserWithEmailAndPassword = totp.createUserWithEmailAndPassword;
exports.debugErrorMap = totp.debugErrorMap;
exports.deleteUser = totp.deleteUser;
exports.fetchSignInMethodsForEmail = totp.fetchSignInMethodsForEmail;
exports.getAdditionalUserInfo = totp.getAdditionalUserInfo;
exports.getAuth = totp.getAuth;
exports.getIdToken = totp.getIdToken;
exports.getIdTokenResult = totp.getIdTokenResult;
exports.getMultiFactorResolver = totp.getMultiFactorResolver;
exports.getRedirectResult = totp.getRedirectResult;
exports.inMemoryPersistence = totp.inMemoryPersistence;
exports.indexedDBLocalPersistence = totp.indexedDBLocalPersistence;
exports.initializeAuth = totp.initializeAuth;
exports.initializeRecaptchaConfig = totp.initializeRecaptchaConfig;
exports.isSignInWithEmailLink = totp.isSignInWithEmailLink;
exports.linkWithCredential = totp.linkWithCredential;
exports.linkWithPhoneNumber = totp.linkWithPhoneNumber;
exports.linkWithPopup = totp.linkWithPopup;
exports.linkWithRedirect = totp.linkWithRedirect;
exports.multiFactor = totp.multiFactor;
exports.onAuthStateChanged = totp.onAuthStateChanged;
exports.onIdTokenChanged = totp.onIdTokenChanged;
exports.parseActionCodeURL = totp.parseActionCodeURL;
exports.prodErrorMap = totp.prodErrorMap;
exports.reauthenticateWithCredential = totp.reauthenticateWithCredential;
exports.reauthenticateWithPhoneNumber = totp.reauthenticateWithPhoneNumber;
exports.reauthenticateWithPopup = totp.reauthenticateWithPopup;
exports.reauthenticateWithRedirect = totp.reauthenticateWithRedirect;
exports.reload = totp.reload;
exports.revokeAccessToken = totp.revokeAccessToken;
exports.sendEmailVerification = totp.sendEmailVerification;
exports.sendPasswordResetEmail = totp.sendPasswordResetEmail;
exports.sendSignInLinkToEmail = totp.sendSignInLinkToEmail;
exports.setPersistence = totp.setPersistence;
exports.signInAnonymously = totp.signInAnonymously;
exports.signInWithCredential = totp.signInWithCredential;
exports.signInWithCustomToken = totp.signInWithCustomToken;
exports.signInWithEmailAndPassword = totp.signInWithEmailAndPassword;
exports.signInWithEmailLink = totp.signInWithEmailLink;
exports.signInWithPhoneNumber = totp.signInWithPhoneNumber;
exports.signInWithPopup = totp.signInWithPopup;
exports.signInWithRedirect = totp.signInWithRedirect;
exports.signOut = totp.signOut;
exports.unlink = totp.unlink;
exports.updateCurrentUser = totp.updateCurrentUser;
exports.updateEmail = totp.updateEmail;
exports.updatePassword = totp.updatePassword;
exports.updatePhoneNumber = totp.updatePhoneNumber;
exports.updateProfile = totp.updateProfile;
exports.useDeviceLanguage = totp.useDeviceLanguage;
exports.validatePassword = totp.validatePassword;
exports.verifyBeforeUpdateEmail = totp.verifyBeforeUpdateEmail;
exports.verifyPasswordResetCode = totp.verifyPasswordResetCode;
//# sourceMappingURL=index.js.map
