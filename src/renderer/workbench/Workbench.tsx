import { Button } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import { Editor } from './pages/Editor/Editor';
import { FileTree } from './components/FileTree/FileTree';
import { dialogController } from '../dialog-controller';

import { WorkbenchContext, IWorkbenchContext } from './WorkbenchProvider';
import { AppContext, IAppContext } from '../context/AppProvider';
import { ComponentList } from './pages/ComponentList/ComponentList';
import { ComponentDetail } from './pages/ComponentDetail/ComponentDetail';

const Workbench = () => {
  const { path, url } = useRouteMatch();

  const { loadScan, file, reset } = useContext(WorkbenchContext) as IWorkbenchContext;
  const { scanPath, scanBasePath } = useContext(AppContext) as IAppContext;

  const init = async () => {
    const result = scanPath ? await loadScan(scanPath) : false;
    if (!result) {
      dialogController.showError('Error', 'Cannot read scan.');
    }
  };

  useEffect(() => {
    init();
    return reset;
  }, []);

  return (
    <div>
      <SplitPane split="vertical" minSize={300} defaultSize={300}>
        <aside className="panel explorer">
          <header>
            <span className="title">Explorer</span>
            <Link to="/">
              <Button size="small">BACK</Button>
            </Link>
          </header>
          <div className="file-tree-container">
            <FileTree />
          </div>
        </aside>
        <main className="match-info">
          <Switch>
            <Route exact path={path}>
              <ComponentList />
            </Route>
            <Route path={`${path}/component/`}>
              <ComponentDetail />
            </Route>
            <Route path={`${path}/file`}>{file ? <Editor /> : null}</Route>
          </Switch>
        </main>
      </SplitPane>
    </div>
  );
};

export default Workbench;
