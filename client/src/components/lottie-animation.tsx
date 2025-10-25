import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface LottieAnimationProps {
  animationUrl: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  playOnScroll?: boolean;
  height?: string | number;
  width?: string | number;
}

export function LottieAnimation({
  animationUrl,
  className = "",
  loop = true,
  autoplay = true,
  speed = 1,
  playOnScroll = false,
  height = "auto",
  width = "auto",
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }

    fetch(animationUrl)
      .then((res) => res.json())
      .then((data) => {
        setAnimationData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load Lottie animation:", err);
        setIsLoading(false);
      });
  }, [animationUrl]);

  useEffect(() => {
    if (!lottieRef.current || !playOnScroll) return;

    if (isVisible) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [isVisible, playOnScroll]);

  if (isLoading || !animationData) {
    return <div className={className} style={{ height, width }} />;
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ height, width }}
      />
    </div>
  );
}
