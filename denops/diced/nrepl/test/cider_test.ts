import { asserts } from "../../test_deps.ts";
import { nrepl } from "../../deps.ts";
import * as sut from "./cider.ts";

//   call s:assert.equals(s:funcs.summary(dummy_success_resp),
//         \ {'is_success': 1,
//         \  'summary': 'foo.success: Ran 1 assertions, in 2 test functions. 0 failures, 0 errors.'})
Deno.test("extractSummary", async () => {
  const resp = nrepl.util.doneResponse([
    {
      "summary": { "test": 1, "var": 2, "fail": 0, "error": 0 },
      "testing-ns": "foo.success",
    },
  ]);

  asserts.assertEquals(await sut.extractSummary(resp), {
    isSuccess: true,
    summary:
      "foo.success: Ran 1 assertions, in 2 test functions. 0 failures, 0 errors.",
  });

  // summary 内に test がない場合
  // error, fail がある場合
});

// function! s:suite.error_message_test() abort
//   call s:assert.equals(
//       \ 'foo',
//       \ s:funcs.error_message({'var': 'foo'}))
//
//   call s:assert.equals(
//       \ 'foo: bar',
//       \ s:funcs.error_message({'var': 'foo', 'context': 'bar'}))
// endfunction
//
// function! s:suite.summary_success_test() abort
//   let dummy_success_resp = {
//         \ 'summary': {'test': 1, 'var': 2, 'fail': 0, 'error': 0},
//         \ 'testing-ns': 'foo.success'}
//
//   call s:assert.equals(s:funcs.summary(dummy_success_resp),
//         \ {'is_success': 1,
//         \  'summary': 'foo.success: Ran 1 assertions, in 2 test functions. 0 failures, 0 errors.'})
// endfunction
//
// function! s:suite.summary_failure_test() abort
//   let dummy_failure_resp = {
//         \ 'summary': {'test': 1, 'var': 2, 'fail': 3, 'error': 4},
//         \ 'testing-ns': 'foo.failure'}
//
//   call s:assert.equals(s:funcs.summary(dummy_failure_resp),
//         \ {'is_success': 0,
//         \  'summary': 'foo.failure: Ran 1 assertions, in 2 test functions. 3 failures, 4 errors.'})
// endfunction
//
// function! s:ns_path_relay(msg) abort
//   if a:msg['op'] ==# 'ns-path'
//     return {'status': ['done'], 'path': '/path/to/file.clj'}
//   endif
//   return {'status': ['done']}
// endfunction
//
// function! s:suite.collect_errors_and_passes_success_test() abort
//   let dummy_resp = [{
//         \ 'results': {
//         \   'foo.core-test': {
//         \     'err-test': [
//         \       {'context': [], 'ns': 'foo.core-test', 'message': [], 'type': 'pass', 'var': 'err-test-var'}]}}}]
//   call s:ch.mock({'status_value': 'open', 'relay': funcref('s:ns_path_relay')})
//
//   call s:assert.equals(s:funcs.collect_errors_and_passes(dummy_resp),
//         \ [[], [{'var': 'err-test-var'}]])
// endfunction
//
// function! s:suite.collect_errors_and_passes_failed_without_diffs_test() abort
//   let dummy_resp = [{
//         \ 'results': {
//         \   'foo.core-test': {
//         \     'err-test': [
//         \       {'context': [], 'ns': 'foo.core-test', 'message': [], 'type': 'fail', 'var': 'err-test-var',
//         \        'line': 123, 'expected': 'expected-result', 'actual': 'actual-result'}]}}}]
//   call s:ch.mock({'status_value': 'open', 'relay': funcref('s:ns_path_relay')})
//
//   call s:assert.equals(s:funcs.collect_errors_and_passes(dummy_resp), [
//         \ [{'type': 'E',
//         \   'lnum': 123,
//         \   'filename': '/path/to/file.clj',
//         \   'expected': 'expected-result',
//         \   'actual': 'actual-result',
//         \   'text': 'err-test-var',
//         \   'var': 'err-test-var'}],
//         \ [],
//         \ ])
// endfunction
//
// function! s:suite.collect_errors_and_passes_failed_with_diffs_test() abort
//   let dummy_resp = [{
//         \ 'results': {
//         \   'foo.core-test': {
//         \     'err-test': [
//         \       {'context': [], 'ns': 'foo.core-test', 'message': [], 'type': 'fail', 'var': 'err-test-var',
//         \        'line': 123, 'expected': 'expected-result',
//         \        'diffs': [['actual-result', ['foo', 'bar']]]}]}}}]
//   call s:ch.mock({'status_value': 'open', 'relay': funcref('s:ns_path_relay')})
//
//   call s:assert.equals(s:funcs.collect_errors_and_passes(dummy_resp), [
//         \ [{'type': 'E',
//         \   'lnum': 123,
//         \   'filename': '/path/to/file.clj',
//         \   'expected': 'expected-result',
//         \   'actual': 'actual-result',
//         \   'diffs': "- foo\n+ bar",
//         \   'text': 'err-test-var',
//         \   'var': 'err-test-var'}],
//         \ [],
//         \ ])
// endfunction
//
// function! s:suite.collect_errors_and_passes_errored_test() abort
//   let dummy_resp = [{
//         \ 'results': {
//         \   'foo.core-test': {
//         \     'err-test': [
//         \       {'context': [], 'ns': 'foo.core-test', 'message': [], 'type': 'error', 'var': 'err-test-var',
//         \        'line': 123, 'expected': 'expected-result', 'error': 'error-message'}]}}}]
//   call s:ch.mock({'status_value': 'open', 'relay': funcref('s:ns_path_relay')})
//
//   call s:assert.equals(s:funcs.collect_errors_and_passes(dummy_resp), [
//         \ [{'type': 'E',
//         \   'lnum': 123,
//         \   'filename': '/path/to/file.clj',
//         \   'expected': 'expected-result',
//         \   'actual': 'error-message',
//         \   'text': 'err-test-var',
//         \   'var': 'err-test-var'}],
//         \ [],
//         \ ])
// endfunction
//
// function! s:suite.collect_errors_and_passes_could_not_find_ns_path_test() abort
//   let dummy_resp = [{
//         \ 'results': {
//         \   'foo.core-test': {
//         \     'err-test': [
//         \       {'context': [], 'ns': 'foo.core-test', 'message': [], 'type': 'fail', 'var': 'err-test-var',
//         \        'file': 'test/foo/core_test.clj', 'line': 123, 'expected': 'expected-result', 'actual': 'actual-result'}]}}}]
//   call s:ch.mock({'status_value': 'open', 'relay': {msg ->
//         \ (msg['op'] ==# 'ns-path') ? {'status': ['done'], 'path': []}
//         \                           : {'status': ['done']}}})
//   call iced#cache#set('user-dir', '/user/dir')
//   call iced#cache#set('file-separator', '/')
//
//   call s:assert.equals(s:funcs.collect_errors_and_passes(dummy_resp), [
//         \ [{'type': 'E',
//         \   'lnum': 123,
//         \   'filename': '/user/dir/test/foo/core_test.clj',
//         \   'expected': 'expected-result',
//         \   'actual': 'actual-result',
//         \   'text': 'err-test-var',
//         \   'var': 'err-test-var'}],
//         \ [],
//         \ ])
// endfunction
//
// function! s:suite.collect_errors_and_passes_without_ns_path_op() abort
//   let dummy_resp = [{
//         \ 'results': {
//         \   'foo.core-test': {
//         \     'err-test': [
//         \       {'context': [], 'ns': 'foo.core-test', 'message': [], 'type': 'fail', 'var': 'err-test-var',
//         \        'file': 'dummy-file', 'line': 234, 'expected': 'expected-result', 'actual': 'actual-result'}]}}}]
//
//   call iced#nrepl#reset()
//   call s:ch.mock({'status_value': 'open', 'relay': {msg ->
//         \ (msg['op'] ==# 'describe') ? {'status': ['done'], 'ops': {}} : {}}})
//
//   call s:assert.equals(s:funcs.collect_errors_and_passes(dummy_resp),
//         \ [[{'lnum': 234, 'actual': 'actual-result', 'expected': 'expected-result',
//         \    'type': 'E', 'text': 'err-test-var', 'var': 'err-test-var', 'filename': 'dummy-file'}],
//         \ []])
// endfunction
//
