import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';

import BookViewer, { BookViewerProps } from '../component/pages/BookViewer';
import { BookForViewer } from '../services/forViewer/models';
import { BookForViewerState } from '../reducer/bookForViewer';
import { ConbineState } from '../reducer/index';

import { getBookForViewer } from '../actions/bookForViewer';

interface StateProps {
  bookForViewer: BookForViewer;
  isLoading?: boolean;
}

interface DispatchProps {
  getBookForViewerStart: (bookID: number) => void;
}

type EnhancedMembersProps = BookViewerProps & StateProps & DispatchProps;

/*
mapStateToPropsはreduxのstate(グローバルステートのようなもの)から
コンポーネントに流したいステートだけを決める
*/
const mapStateToProps = (state: ConbineState): StateProps => {
  console.log(state);

  return {
    bookForViewer: state.bookForViewer.bookForViewer,
    isLoading: state.bookForViewer.isLoading,
  };
};

/*
mapDispatchToPropsはconnectで結ばれるコンポーネントに渡したいactionCreaterだけを決める。
*/
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  // bindActionCreators(actionCreators, dispatch)

  /* 通常はdispatchを直接呼び出す必要がある
  bindActionCreatorsは上のやつをまとめてくれる(dispatchを何回もするのは面倒な時とか)
*/
  /*
  const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    add: amount => dispatch(add(amount)),
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
  });
    もしくは
  const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
    bindActionCreators(
    { add, decrement, increment },dispatch,
    );
  */

  // bindActionCreators(actionCreators, dispatch)
  bindActionCreators(
    {
      getBookForViewerStart: (bookID: number) =>
        getBookForViewer.start({ bookID }),
    },
    dispatch,
  );

const BookViewerContainer: FC<EnhancedMembersProps> = ({
  bookForViewer,
  isLoading,
  getBookForViewerStart,
}) => {
  const bookID = 0;

  useEffect(() => {
    console.log(bookForViewer);
    getBookForViewerStart(bookID);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <BookViewer bookForViewer={bookForViewer} isLoading={isLoading} />;
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookViewerContainer),
  // react-reduxのconnect関数はいろいろなユースケースがあって難しい
  // https://qiita.com/MegaBlackLabel/items/df868e734d199071b883
  // 今回の事例だとmapStateToProps, mapDispatchToPropsで選ばれたステートと関数だけが
  // MembersContainerにpropsとして送られる
);
