import React, {useCallback, useEffect, useRef} from 'react';
import {useTool, useUrls} from "../hooks.ts";
import {usePrevious} from "@uidotdev/usehooks";
import {arrayShallowEqual} from "../../../utils/deepEqual.ts";
import * as DWV from 'dwv';

const DicomViewerComponent: React.FC = () => {
  const dwvAppRef = useRef<DWV.App | null>(null);
  const containerRef = useRef(null);

  const urls = useUrls();
  const prevUrls = usePrevious(urls);
  const tool = useTool();

  const onFirstMount = useCallback((app: DWV.App) => {
    app.setTool('ZoomAndPan');
  }, []);

  useEffect(() => {
    if (!dwvAppRef.current) {
      const app = new DWV.App();

      const viewConfig0 = new DWV.ViewConfig('dicom-viewer');
      const viewConfigs = {'*': [viewConfig0]};
      const options = new DWV.AppOptions(viewConfigs);

      options.tools = {
        ZoomAndPan: new DWV.ToolConfig(),
      };

      app.init(options);
      app.addEventListener('load', onFirstMount);

      dwvAppRef.current = app;

      return () => {
        app.removeEventListener('load', onFirstMount)
      }
    }
  }, [onFirstMount]);

  useEffect(function onToolChange() {
    if (!dwvAppRef.current) {
      return;
    }
    
    // handle tool change here
  }, [dwvAppRef, tool]);

  useEffect(function onUrlsChange() {
    if (!dwvAppRef.current) {
      return;
    }

    if (arrayShallowEqual(prevUrls, urls)) {
      return;
    }
    
    dwvAppRef.current.loadURLs(urls);

  }, [dwvAppRef, urls]);

  return <div ref={containerRef} id="dicom-viewer" style={{width: '100%', height: '100%'}}/>;
};

export default DicomViewerComponent;
