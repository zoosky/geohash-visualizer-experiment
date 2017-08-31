addSbtPlugin("org.scala-js" % "sbt-scalajs" % "0.6.19")

enablePlugins(ScalaJSPlugin)

name := "GeohashVisualizer"

version := "0.1-SNAPSHOT"

//scalaVersion := "2.12.2"

//scalaJSUseMainModuleInitializer := true

//testFrameworks += new TestFramework("utest.runner.Framework")

libraryDependencies ++= Seq(
    "org.scala-js" %%% "scalajs-dom" % "0.9.1",
    "com.lihaoyi" %%% "utest" % "0.4.5" % "test"
)