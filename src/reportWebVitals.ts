// 1. 删除对 ReportHandler 的引用，因为它在 v3/v4 中不存在了
const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
      
      // 注意：在最新版中 FID 已经被 INP (onINP) 取代
      // 如果你的版本报错没有 onFID，可以尝试把它删掉，或者改为 onINP
    }).catch(err => console.error("Web Vitals 动态加载失败:", err));
  }
};

export default reportWebVitals;