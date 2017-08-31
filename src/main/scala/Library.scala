import scala.scalajs.js.annotation._

@JSExportTopLevel("Library")
object Library {
  @JSExport("salutation")
  def salutation(name: String = "NoNameProvided") =
    s"Hi there, $name!"
}