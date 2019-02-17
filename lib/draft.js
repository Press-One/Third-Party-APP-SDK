'use strict';

const { request } = require('./request');
const utility = require('./utility');
const validator = require('./validator');

module.exports = Draft;

/**
 * constructor
 *
 * @param {PRSConfig} config
 */
function Draft(config) {
  this.config = config;
}

/**
 * 
 * @function create
 * @param {Object} draft
 * @param {String} draft.title
 * @param {String} draft.content
 * @param {String} draft.mimeType
 * @param {String} draft.source
 * @param {String} draft.originUrl
 * @param {String} draft.projectId
 * @param {Object} authOpts
 * @param {String} authOpts.privateKey
 * @param {String} authOpts.token
 * 
 * @returns {Promise}
 */
Draft.prototype.create = function (draft, authOpts) {
  validator.assert(draft, 'draft cannot be null');
  validator.assert(draft.title, 'draft.title cannot be null');
  validator.assert(draft.content, 'draft.content cannot be null');
  validator.assert(draft.mimeType, 'draft.mimeType cannot be null');
  validator.assert(authOpts, 'authOpts cannot be null');
  validator.assert(authOpts.privateKey || authOpts.token, 'authOpts.privateKey or authOpts.token cannot be null');

  let payload = {
    title: draft.title,
    content: draft.content,
    mimeType: draft.mimeType
  };
  if (draft.source) {
    payload['source'] = draft.source;
  }
  if (draft.originUrl) {
    payload['originUrl'] = draft.originUrl;
  }
  if (draft.projectId) {
    payload['projectId'] = draft.projectId;
  }
  return request({
    host: this.config.getHost(),
    method: 'post',
    path: `/drafts`,
    data: { payload },
    debug: this.config.debug,
    authOpts: authOpts
  });
}

/**
 * 
 * @function update
 * @param {String} id
 * @param {Object} draft
 * @param {String} draft.title
 * @param {String} draft.content
 * @param {String} draft.mimeType
 * @param {String} draft.source
 * @param {String} draft.originUrl
 * @param {String} draft.projectId
 * @param {Object} authOpts
 * @param {String} authOpts.privateKey
 * @param {String} authOpts.token
 * 
 * @returns {Promise}
 */
Draft.prototype.update = function (id, draft, authOpts) {
  validator.assert(id, 'id cannot be null');
  validator.assert(draft, 'draft cannot be null');
  validator.assert(draft.title, 'draft.title cannot be null');
  validator.assert(draft.content, 'draft.content cannot be null');
  validator.assert(draft.mimeType, 'draft.mimeType cannot be null');
  validator.assert(authOpts, 'authOpts cannot be null');
  validator.assert(authOpts.privateKey || authOpts.token, 'authOpts.privateKey or authOpts.token cannot be null');

  let payload = {
    title: draft.title,
    content: draft.content,
    mimeType: draft.mimeType
  };
  if (draft.source) {
    payload['source'] = draft.source;
  }
  if (draft.originUrl) {
    payload['originUrl'] = draft.originUrl;
  }
  if (draft.projectId) {
    payload['projectId'] = draft.projectId;
  }
  return request({
    host: this.config.getHost(),
    method: 'put',
    path: `/drafts/${id}`,
    data: { payload },
    debug: this.config.debug,
    authOpts: authOpts
  });
}

/**
 * 
 * @function delete
 * @param {String} id
 * @param {Object} authOpts
 * @param {String} authOpts.privateKey
 * @param {String} authOpts.token
 * 
 * @returns {Promise}
 */
Draft.prototype.delete = function (id, authOpts) {
  validator.assert(id, 'id cannot be null');
  validator.assert(authOpts, 'authOpts cannot be null');
  validator.assert(authOpts.privateKey || authOpts.token, 'authOpts.privateKey or authOpts.token cannot be null');

  return request({
    host: this.config.getHost(),
    method: 'delete',
    path: `/drafts/${id}`,
    debug: this.config.debug,
    authOpts: authOpts
  });
}

/**
 * 
 * @function getDraft
 * @param {String} id
 * @param {Object} authOpts
 * @param {String} authOpts.privateKey
 * @param {String} authOpts.token
 * 
 * @returns {Promise}
 */
Draft.prototype.getDraft = function (id, authOpts) {
  validator.assert(id, 'id cannot be null');
  validator.assert(authOpts, 'authOpts cannot be null');
  validator.assert(authOpts.privateKey || authOpts.token, 'authOpts.privateKey or authOpts.token cannot be null');

  return request({
    host: this.config.getHost(),
    method: 'get',
    path: `/drafts/${id}`,
    debug: this.config.debug,
    authOpts: authOpts
  });
}


/**
 * 
 * @function list
 * @param {Object} authOpts
 * @param {String} authOpts.privateKey
 * @param {String} authOpts.token
 * 
 * @returns {Promise}
 */
Draft.prototype.list = function (authOpts) {
  validator.assert(authOpts, 'authOpts cannot be null');
  validator.assert(authOpts.privateKey || authOpts.token, 'authOpts.privateKey or authOpts.token cannot be null');

  return request({
    host: this.config.getHost(),
    method: 'get',
    path: `/drafts`,
    debug: this.config.debug,
    authOpts: authOpts
  });
}